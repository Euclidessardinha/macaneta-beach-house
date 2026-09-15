"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="bg-[#faf8f3] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a3a]">
              Localização
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#17231d] sm:text-5xl">
              Um refúgio
              <span className="block font-light italic">
                perto do mar.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Encontre-nos em Macaneta, Marracuene, Moçambique,
              num ambiente pensado para descansar, desfrutar da
              natureza e viver momentos especiais.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#17231d] text-white">
                <MapPin size={21} />
              </div>

              <div>
                <p className="font-semibold text-[#17231d]">
                  Macaneta, Marracuene
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Maputo, Moçambique
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Macaneta%20P%C3%A9rola%20do%20Sul%20Beach%20House"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17231d] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b58a3a]"
            >
              <Navigation size={17} />
              Ver no Google Maps
            </a>
          </motion.div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps?q=Macaneta%20Marracuene%20Mozambique&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Macaneta Pérola do Sul Beach House"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}