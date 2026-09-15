"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    src: "/images/gallery-piscina.jpg",
    alt: "Piscina da Macaneta Pérola do Sul",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-praia.jpg",
    alt: "Praia de Macaneta",
    className: "",
  },
  {
    src: "/images/gallery-natureza.jpg",
    alt: "Natureza da Macaneta",
    className: "",
  },
  {
    src: "/images/gallery-comida.jpg",
    alt: "Gastronomia",
    className: "",
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Interior da acomodação",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a3a]">
            Galeria
          </p>

          <h1 className="text-5xl font-semibold leading-tight text-[#17231d] sm:text-6xl">
            Descubra a
            <span className="block font-light italic">
              Macaneta.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore os espaços, paisagens, momentos e experiências
            da Macaneta Pérola do Sul Beach House.
          </p>
        </motion.div>

        {/* GALERIA */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />

              <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight
                  size={20}
                  className="text-[#17231d]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* INSTAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-600">
            Veja mais momentos da Macaneta no Instagram.
          </p>

          <a
            href="https://www.instagram.com/macanetaperoladosulbeach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#17231d] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b58a3a]"
          >
            @macanetaperoladosulbeach
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}