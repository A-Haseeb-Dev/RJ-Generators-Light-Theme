"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
}

export function FloatingWhatsApp({ phoneNumber }: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent("Hello! I want to buy or sell a generator with RJ Generators.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
