"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Alojamento", href: "#alojamento" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Galeria", href: "/galeria" },
  { name: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ajusta os links dependendo da página atual
  const getHref = (href: string) => {
    if (pathname === "/") {
      return href;
    }

    if (href.startsWith("#")) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="Macaneta Beach House"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <p
              className={`text-sm font-semibold tracking-[0.2em] transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              MACANETA
            </p>

            <p
              className={`text-xs tracking-[0.25em] transition-colors ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              BEACH HOUSE
            </p>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={getHref(item.href)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-[#9b7424]"
                  : "text-white hover:text-[#f5d27a]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ÁREA DOS BOTÕES */}
        <div className="flex items-center gap-2">

          {/* RESERVAR - DESKTOP */}
          <a
            href="/reserva"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:inline-flex lg:px-6 lg:py-3 ${
              scrolled
                ? "bg-[#b78a32] text-white hover:bg-[#956f24]"
                : "bg-white text-gray-900 hover:bg-[#f5d27a]"
            }`}
          >
            Reservar
          </a>

          {/* RESERVAR - MOBILE */}
          <a
            href="/reserva"
            className="inline-flex rounded-full bg-[#b78a32] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#956f24] sm:hidden"
          >
            Reservar
          </a>

          {/* MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* MENU MOBILE ABERTO */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={getHref(item.href)}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-800 transition-colors hover:text-[#9b7424]"
            >
              {item.name}
            </a>
          ))}

          {/* RESERVAR DENTRO DO MENU */}
          <a
            href="/reserva"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center rounded-full bg-[#b78a32] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#956f24]"
          >
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}