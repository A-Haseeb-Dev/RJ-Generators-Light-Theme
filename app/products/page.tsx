"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ProductsPage() {
  const whatsappUrl = buildWhatsAppUrl("Connect with our representative on whatsapp to get a quote for generator.");

  const products = [
    {
      id: 1,
      name: "500 kVA Heavy-Duty Generator",
      type: "Diesel · For Sale",
      output: "500 kVA",
      condition: "New & Refurbished",
      description: "High-output diesel generator built for continuous operation. Fully load-tested, certified, and ready for large sites, data centers, and full facility backup.",
      image: "/images/500KVA.jpeg",
      features: ['200-Point Inspection', 'Sound Attenuated Enclosures', 'Backed by Warranty']
    },
    {
      id: 2,
      name: "400 kVA Heavy-Duty Generator",
      type: "Diesel · For Sale",
      output: "400 kVA",
      condition: "New & Refurbished",
      description: "Robust industrial power for manufacturing and critical facilities. Certified, load-tested, and ready for immediate delivery.",
      image: "/images/400KVA.jpeg",
      features: ['Heavy-Duty Enclosure', 'Load-Tested & Certified', 'Backed by Warranty']
    },
    {
      id: 3,
      name: "300 kVA Industrial Generator",
      type: "Diesel · For Sale",
      output: "300 kVA",
      condition: "Refurbished",
      description: "Heavy-duty unit for plants, hospitals, and continuous operation. Fully serviced with a written performance guarantee.",
      image: "/images/300KVA.jpeg",
      features: ['Continuous-Rated Duty', 'Full Service History', 'Warranty Included']
    },
    {
      id: 4,
      name: "220 kVA Industrial Generator",
      type: "Diesel · For Sale",
      output: "220 kVA",
      condition: "New & Used",
      description: "Dependable power for factories, schools, and commercial buildings. Inspected, serviced, and ready to run.",
      image: "/images/220KVA.jpeg",
      features: ['200-Point Inspection', 'Ready to Run', 'Backed by Warranty']
    },
    {
      id: 5,
      name: "150 kVA Mobile Generator",
      type: "Diesel · For Sale",
      output: "150 kVA",
      condition: "Refurbished",
      description: "Higher-capacity trailer unit for mid-sized sites and prime power. Multi-voltage capability and rugged construction included.",
      image: "/images/150KVA.jpeg",
      features: ['Multi-voltage Selector', 'Load-Tested & Certified', 'Warranty Included']
    },
    {
      id: 6,
      name: "100 kVA Mobile Generator",
      type: "Diesel · For Sale",
      output: "100 kVA",
      condition: "New & Used",
      description: "Versatile mobile unit for workshops, telecom sites, and light industry. Compact, serviced, and ready for immediate deployment.",
      image: "/images/100KVA.jpeg",
      features: ['Compact & Reliable', 'Low Maintenance', 'Backed by Warranty']
    },
    {
      id: 7,
      name: "90 kVA Mobile Generator",
      type: "Diesel · For Sale",
      output: "90 kVA",
      condition: "Refurbished",
      description: "Flexible mobile unit for events, site tools, and light industrial loads. Fully inspected and load-tested before sale.",
      image: "/images/90KVA.jpeg",
      features: ['200-Point Inspection', 'Quiet-Running', 'Warranty Included']
    },
    {
      id: 8,
      name: "60 kVA Mobile Generator",
      type: "Diesel · For Sale",
      output: "60 kVA",
      condition: "New & Refurbished",
      description: "Steady backup for small businesses, clinics, and construction trailers. Compact, dependable, and easy to transport.",
      image: "/images/60KVA.jpeg",
      features: ['Compact Design', 'Easy Transport', 'Backed by Warranty']
    },
    {
      id: 9,
      name: "45 kVA Portable Generator",
      type: "Diesel · For Sale",
      output: "45 kVA",
      condition: "Refurbished",
      description: "Reliable mid-size power for retail units, offices, and site tools. Serviced and tested, ready for immediate use.",
      image: "/images/45KVA.jpeg",
      features: ['Reliable Output', 'Serviced & Tested', 'Warranty Included']
    },
    {
      id: 10,
      name: "25 kVA Portable Generator",
      type: "Diesel · For Sale",
      output: "25 kVA",
      condition: "New & Used",
      description: "Compact and quiet — ideal for homes, small shops, events, and short-term outages. Economical and easy to maintain.",
      image: "/images/25KVA.jpeg",
      features: ['Compact & Quiet', 'Economical Running', 'Backed by Warranty']
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 border-b border-zinc-200 pb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-0.5 bg-blue-600"></span>
              <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                Generators For Sale
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Buy Generators — Current Stock
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-500 max-w-2xl text-lg leading-relaxed"
            >
              Browse our current stock of new, refurbished, and used generators. Every unit is inspected, load-tested, and certified before sale. Contact us for live pricing and availability.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-zinc-200 overflow-hidden group hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="bg-blue-600 text-white px-3 py-1.5 text-xs font-mono font-bold uppercase shadow-sm">
                      {product.type}
                    </span>
                    <span className="bg-zinc-100 border border-zinc-200 text-zinc-900 px-3 py-1.5 text-xs font-mono font-bold uppercase shadow-sm">
                      {product.condition}
                    </span>
                    <span className="font-mono text-sm text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 whitespace-nowrap ml-auto">
                      {product.output}
                    </span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                  </div>
                  <p className="text-zinc-600 mb-8 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                        <span className="w-1.5 h-1.5 bg-blue-600 block shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8 border-t border-zinc-100 mt-auto">
                    <a
                      href={buildWhatsAppUrl(`Connect with our representative on whatsapp to get a quote for generator. I am interested in the ${product.name} (${product.type}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 group-hover:text-blue-600 transition-colors"
                    >
                      Request Pricing & Availability <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sell Your Generator CTA */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 bg-zinc-950 text-white overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image src="/images/500KVA.jpeg" alt="Generators we buy" fill sizes="100vw" className="object-cover opacity-25" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/85 to-zinc-950/70"></div>
            </div>
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-12 h-0.5 bg-blue-500"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                    We Buy Generators
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Have a generator to sell?</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  We buy all makes and models — new, used, or non-running. Send us your details, get a fair market valuation, and receive payment on the spot at collection.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20 shrink-0"
              >
                Get an Instant Valuation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
