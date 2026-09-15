"use client";

import { motion } from "framer-motion";
import { Waves, UtensilsCrossed, Trees } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#faf8f3] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a3a]">
              Bem-vindo à Macaneta
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#17231d] sm:text-5xl">
              Um lugar para
              <span className="block font-light italic">
                desacelerar.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg"
          >
            Na Macaneta Beach House, natureza, tranquilidade e conforto
            encontram-se num só lugar. Um espaço pensado para momentos
            especiais, escapadelas de fim de semana e dias inesquecíveis
            junto ao mar.
          </motion.p>

        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e8cf] text-[#b58a3a]">
              <Waves size={24} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#17231d]">
              Perto do mar
            </h3>

            <p className="leading-7 text-gray-600">
              Desfrute da atmosfera de Macaneta e da proximidade com a praia,
              rodeado por paisagens naturais.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e8cf] text-[#b58a3a]">
              <Trees size={24} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#17231d]">
              Natureza & tranquilidade
            </h3>

            <p className="leading-7 text-gray-600">
              Um ambiente verde e acolhedor para descansar, aproveitar o
              espaço e fugir da rotina.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e8cf] text-[#b58a3a]">
              <UtensilsCrossed size={24} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#17231d]">
              Sabores & momentos
            </h3>

            <p className="leading-7 text-gray-600">
              Aproveite refeições, encontros e momentos especiais num
              ambiente pensado para partilhar.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}