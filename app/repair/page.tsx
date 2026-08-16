"use client";

import { Wrench, Paintbrush, Cpu, Cog, ShieldCheck, ClipboardCheck, CheckCircle2, Zap, Truck } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function RepairPage() {
  const services = [
    { icon: <Wrench className="w-6 h-6" />, title: "Generator Repair & Troubleshooting", desc: "Fast diagnosis and reliable repair of starting issues, overload faults, control panel errors, and more." },
    { icon: <Cog className="w-6 h-6" />, title: "Generator Servicing & Maintenance", desc: "Scheduled servicing including oil, filters, coolant, belts, and battery checks to keep your unit running at peak performance." },
    { icon: <Paintbrush className="w-6 h-6" />, title: "Generator Painting & Color Work", desc: "Full repaint, touch-ups, and color customization that protect your generator from corrosion and give it a like-new finish." },
    { icon: <Cpu className="w-6 h-6" />, title: "Electrical & Mechanical Repairs", desc: "Complete alternator, AVR, wiring, and engine repairs handled by experienced technicians with genuine parts." },
    { icon: <Zap className="w-6 h-6" />, title: "Rental Generator Breakdown Support", desc: "Any technical fault on a generator rented from us is covered and fixed quickly during your rental period." },
    { icon: <ClipboardCheck className="w-6 h-6" />, title: "Preventive Maintenance", desc: "Planned maintenance programs and load testing that prevent downtime before it happens, for both sale and rental units." },
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
              alt="Generator repair and maintenance technician"
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
                Repair & Maintenance
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Generator Repair & <span className="text-blue-400">Maintenance Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10"
            >
              We provide complete generator repair and maintenance services — including generator painting,
              servicing, troubleshooting, and any other repair requirements. One team for every generator need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Explore Services
              </a>
              <a
                href={buildWhatsAppUrl("Hello! I need generator repair or maintenance services from RJ Generators.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Book A Repair
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section id="services" className="py-24 lg:py-32 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-600"></span>
                <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                  Our Services Include
                </span>
                <span className="w-12 h-0.5 bg-blue-600"></span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Every repair, under one roof.</h2>
              <p className="text-lg text-zinc-500">
                From a quick service to a complete repaint or major overhaul, our technicians handle it all — with genuine parts and quality workmanship.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-50 border border-zinc-200 p-10 group hover:bg-zinc-900 hover:border-zinc-900 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-8 text-zinc-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Coverage */}
        <section className="relative py-24 lg:py-32 bg-zinc-950 border-b border-zinc-200 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_generator_1_1786218289285.jpg"
              alt="Rental generator service coverage"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950/90" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-500"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                    Rental Peace Of Mind
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Covered while you rent with us.
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed mb-10">
                  For generators rented from us, any technical fault or issue that occurs during the rental period is
                  covered under our service — subject to the terms and conditions of the rental agreement.
                </p>
                <ul className="space-y-4">
                  {[
                    "Breakdowns fixed at no extra cost during the rental period",
                    "Rapid response so your downtime stays minimal",
                    "Serviced and load-tested units before every deployment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-10 lg:p-14">
                <Wrench className="w-10 h-10 text-blue-400 mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4">Book a service or repair</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Send us the details of your generator — make, model, and the issue you are facing. Our workshop will
                  confirm a diagnosis and a time slot. Prefer a maintenance plan? We offer scheduled programs too.
                </p>
                <a
                  href={buildWhatsAppUrl("Hello! I want to book a generator repair or maintenance service with RJ Generators.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Book On WhatsApp <Truck className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-8" />
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Generator giving you trouble?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Don&apos;t wait for a breakdown. Message our workshop team and get your generator repaired, serviced, or repainted — fast.
            </p>
            <a
              href={buildWhatsAppUrl("Hello! My generator needs repair or maintenance from RJ Generators.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-blue-900 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20"
            >
              Chat With The Workshop Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
