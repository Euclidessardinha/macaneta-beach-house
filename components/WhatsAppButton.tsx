"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "258860549105";

  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais informações sobre a Macaneta Pérola do Sul Beach House."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Macaneta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={28} strokeWidth={2.3} />

      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#17231d] px-3 py-2 text-sm font-medium text-white shadow-lg sm:block">
        Fale connosco
      </span>
    </a>
  );
}