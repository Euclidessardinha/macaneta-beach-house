"use client";

import { motion } from "framer-motion";
import {
  Waves,
  UtensilsCrossed,
  Trees,
  Sun,
} from "lucide-react";

const experiences = [
  {
    title: "Piscina",
    description:
      "Relaxe e aproveite momentos refrescantes junto à piscina.",
    image: "/images/piscina.jpg",
    icon: Waves,
  },
  {
    title: "Praia",
    description:
      "Descubra a beleza natural da praia de Macaneta e aproveite o mar.",
    image: "/images/praia.jpg",
    icon: Sun,
  },
  {
    title: "Natureza",
    description:
      "Caminhe, explore e desfrute de um ambiente rodeado pela natureza.",
    image: "/images/natureza.jpg",
    icon: Trees,
  },
  {
    title: "Gastronomia",
    description:
      "Saboreie refeições e momentos especiais num ambiente descontraído.",
    image: "/images/comida.jpg",
    icon: UtensilsCrossed,
  },
];

export default function Experiences() {
  return (
    <section
      id="experiencias"
      className="bg-[#17231d] px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d9b45b]">
            Viva Macaneta
          </p>

          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Mais do que uma estadia.
            <span className="block font-light italic text-[#d9b45b]">
              Uma experiência.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-white/65">
            Aproveite cada momento entre a natureza, a praia, a piscina
            e os sabores da Macaneta Beach House.
          </p>
        </motion.div>

        {/* EXPERIÊNCIAS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative h-[430px] overflow-hidden rounded-2xl"
              >
                {/* IMAGEM */}
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* ÍCONE */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                  <Icon size={22} />
                </div>

                {/* TEXTO */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold">
                    {experience.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                    {experience.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}