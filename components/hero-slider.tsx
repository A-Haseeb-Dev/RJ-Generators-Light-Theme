"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/images/500KVA.jpeg",
  "/images/400KVA.jpeg",
  "/images/300KVA.jpeg",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full group bg-zinc-950 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Generator Stock ${currentIndex + 1}`}
            fill
            sizes="100vw"
            className="object-cover origin-center"
            referrerPolicy="no-referrer"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
