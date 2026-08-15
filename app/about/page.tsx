"use client";

import Image from "next/image";
import { Shield, Zap, Wrench, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";

export default function AboutPage() {
  const whatsappNumber = "1234567890"; // Placeholder

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-0.5 bg-blue-600"></span>
              <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                About RJ Generators
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-8"
            >
              Buying and selling generators with total trust.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-zinc-600 leading-relaxed"
            >
              For over two decades, RJ Generators has been a trusted dealer for the sale and purchase of industrial generators. We don&apos;t just move machines — we give sellers a fair market price and give buyers quality-checked, certified generators that perform.
            </motion.p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] bg-zinc-100 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1000&auto=format&fit=crop"
                alt="Engineering Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] bg-zinc-100 overflow-hidden md:translate-y-12"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
                alt="Manufacturing Facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-zinc-50 border-y border-zinc-200 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold tracking-tight mb-6"
              >
                Our Core Principles
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-zinc-600"
              >
                Everything we do is centered around fair dealing, honest valuations, and generators that perform exactly as promised.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Shield className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Fair & Transparent Pricing</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Sellers receive honest, market-based valuations with no pressure and no hidden fees. What we quote is what you get paid.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Zap className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Trusted Inspections</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Every generator we buy is assessed honestly, and every generator we sell passes a rigorous 200-point inspection and load test before it leaves our yard.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Wrench className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Fast Payments & Support</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  We pay on the spot at collection, provide free nationwide collection, and back every sale with warranty and after-sales support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats / Proof */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">Proven in the trading market.</h2>
              <ul className="space-y-6">
                {[
                  "Over 10,000 generators bought and sold nationwide.",
                  "Same-day payment on every generator we purchase.",
                  "Every unit sold passes a certified 200-point inspection.",
                  "Free nationwide collection and delivery."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-8 bg-zinc-900 text-white flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold mb-2">20+</span>
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Years in Business</span>
              </div>
              <div className="p-8 bg-blue-600 text-white flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold mb-2">10k+</span>
                <span className="text-sm font-mono text-blue-200 uppercase tracking-wider">Units Traded</span>
              </div>
              <div className="col-span-2 p-8 bg-zinc-100 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold text-zinc-900 mb-2">Same-Day</span>
                <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Payment on Purchase</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={whatsappNumber} />
    </div>
  );
}
