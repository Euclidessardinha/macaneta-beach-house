"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

const accommodations = [
  {
    name: "Casa T1",
    description: "Uma opção acolhedora para uma estadia tranquila.",
    price: "5.000 MZN",
    image: "/images/casa-t1.jpg",
  },
  {
    name: "Casa T2",
    description: "Espaço confortável para famílias e pequenos grupos.",
    price: "8.500 MZN",
    image: "/images/casa-t2.jpg",
  },
  {
    name: "Casa T3",
    description: "Mais espaço para aproveitar a sua estadia em grupo.",
    price: "10.000 MZN",
    image: "/images/casa-t3.jpg",
  },
  {
    name: "Casa T4",
    description: "Uma opção espaçosa para momentos especiais.",
    price: "12.000 MZN",
    image: "/images/casa-t4.jpg",
  },
];

export default function Accommodation() {
  return (
    <section
      id="alojamento"
      className="bg-white px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a3a]">
            Alojamento
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#17231d] sm:text-5xl">
            Encontre o espaço ideal
            <span className="block font-light italic">
              para a sua estadia.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Escolha entre diferentes opções de alojamento e aproveite
            momentos de descanso em Macaneta.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {accommodations.map((accommodation, index) => (
            <motion.article
              key={accommodation.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl bg-[#faf8f3] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGEM */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#17231d] backdrop-blur-sm">
                  {accommodation.price} / noite
                </div>
              </div>

              {/* INFORMAÇÃO */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#17231d]">
                  {accommodation.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {accommodation.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={17} />
                    <span>Consulte disponibilidade</span>
                  </div>

                  <a
                    href="#reservas"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17231d] text-white transition-all duration-300 group-hover:bg-[#b58a3a]"
                    aria-label={`Reservar ${accommodation.name}`}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* NOTA */}
        <p className="mt-8 text-center text-sm text-gray-500">
  
        </p>

      </div>
    </section>
  );
}