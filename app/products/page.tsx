"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";

export default function ProductsPage() {
  const whatsappNumber = "1234567890"; // Placeholder
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I am interested in buying a generator from RJ Generators.")}`;

  const products = [
    {
      id: 1,
      name: "HD-Series",
      type: "Diesel · For Sale",
      output: "500kVA - 2500kVA",
      condition: "New & Refurbished",
      description: "Heavy-duty diesel generators built for continuous operation. Fully load-tested, certified, and ready for immediate delivery with a written warranty.",
      image: "/images/product_generator_1_1786218321227.jpg",
      features: ['200-Point Inspection', 'Sound Attenuated Enclosures', 'Backed by Warranty']
    },
    {
      id: 2,
      name: "NG-Series",
      type: "Natural Gas · For Sale",
      output: "200kVA - 1000kVA",
      condition: "New & Refurbished",
      description: "Clean, efficient natural gas generators ideal for urban environments and long-term running. Low emissions and extended service intervals included.",
      image: "/images/hero_generator_2_1786218304926.jpg",
      features: ['Ultra-Low Emissions', 'Extended Service Intervals', 'Certified & Load-Tested']
    },
    {
      id: 3,
      name: "MR-Series",
      type: "Mobile & Portable · For Sale",
      output: "50kVA - 500kVA",
      condition: "Refurbished",
      description: "Towable, ruggedized generators for construction sites, events, and emergency deployment. Multi-voltage capability and DOT-approved trailers.",
      image: "/images/product_generator_3_1786218348852.jpg",
      features: ['DOT Approved Trailer', 'Multi-voltage Selector', '110% Fluid Containment']
    },
    {
      id: 4,
      name: "MC-Series",
      type: "Marine & Commercial · For Sale",
      output: "100kVA - 800kVA",
      condition: "New & Used",
      description: "Marine-grade generators for offshore platforms, commercial vessels, and coastal installations. Corrosion-resistant and class-certified.",
      image: "/images/hero_generator_1_1786218289285.jpg",
      features: ['Corrosion-Resistant Coating', 'Keel Cooling Compatibility', 'Marine Society Certified']
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
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 text-xs font-mono font-bold uppercase shadow-sm">
                    {product.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-zinc-900 px-3 py-1.5 text-xs font-mono font-bold uppercase shadow-sm">
                    {product.condition}
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                    <div className="font-mono text-sm text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 whitespace-nowrap">
                      {product.output}
                    </div>
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
                      href={whatsappUrl}
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
              <Image src="/images/maintenance_technician_1786218881705.jpg" alt="Technician inspecting a generator we buy" fill sizes="100vw" className="object-cover opacity-25" referrerPolicy="no-referrer" />
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
      <FloatingWhatsApp phoneNumber={whatsappNumber} />
    </div>
  );
}
