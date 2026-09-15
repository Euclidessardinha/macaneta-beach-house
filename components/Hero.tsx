"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] md:bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* GRADIENTE INFERIOR */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium tracking-[0.25em] uppercase">
            <MapPin size={16} />
            Macaneta • Marracuene • Moçambique
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Macaneta
          <span className="block font-light italic">
            Pérola do Sul
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          Um refúgio entre a natureza, o conforto e o mar.
        </motion.p>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#alojamento"
            className="rounded-full bg-[#c79b43] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#a97f31] hover:scale-105"
          >
            EXPLORAR ALOJAMENTO
          </a>

          <a
            href="/galeria"
            className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            VER GALERIA
          </a>
        </motion.div>
      </div>

      {/* INDICADOR DE SCROLL */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Descobrir
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}