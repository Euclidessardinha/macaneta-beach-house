import Link from "next/link";
import {
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#17231d] text-white">

      {/* CONTEÚDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* MARCA */}
          <div>
            <div className="mb-5">
              <p className="text-lg font-semibold tracking-[0.2em]">
                MACANETA
              </p>

              <p className="text-sm tracking-[0.25em] text-white/60">
                BEACH HOUSE
              </p>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Um refúgio entre a natureza, o conforto e o mar.
              Viva momentos especiais na Pérola do Sul.
            </p>

            {/* REDES SOCIAIS */}
            <div className="mt-6 flex items-center gap-3">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/macanetaperoladosulbeach/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold transition-all duration-300 hover:border-[#f5d27a] hover:bg-[#f5d27a] hover:text-[#17231d]"
              >
                IG
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/258860549105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-[#f5d27a] hover:bg-[#f5d27a] hover:text-[#17231d]"
              >
                <MessageCircle size={19} />
              </a>

            </div>
          </div>


          {/* NAVEGAÇÃO */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm text-white/65">

              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href="/#sobre"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="/#alojamento"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Alojamento
                </Link>
              </li>

              <li>
                <Link
                  href="/#experiencias"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Experiências
                </Link>
              </li>

              <li>
                <Link
                  href="/galeria"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Galeria
                </Link>
              </li>

              <li>
                <Link
                  href="/#localizacao"
                  className="transition-colors hover:text-[#f5d27a]"
                >
                  Localização
                </Link>
              </li>

            </ul>
          </div>


          {/* CONTACTOS */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contactos
            </h3>

            <div className="space-y-5">

              {/* TELEFONE 1 */}
              <a
                href="tel:+258860549105"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-[#f5d27a]"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />

                <span>
                  +258 860 549 105
                </span>
              </a>

              {/* TELEFONE 2 */}
              <a
                href="tel:+258844309387"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-[#f5d27a]"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />

                <span>
                  +258 844 309 387
                </span>
              </a>

              {/* LOCALIZAÇÃO */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Macaneta%2C+Marracuene%2C+Mozambique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-white/65 transition-colors hover:text-[#f5d27a]"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />

                <span>
                  Macaneta, Marracuene
                  <br />
                  Maputo, Moçambique
                </span>
              </a>

            </div>
          </div>


          {/* RESERVAS */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Reservas
            </h3>

            <p className="mb-6 text-sm leading-7 text-white/65">
              Planeie a sua estadia e descubra tudo o que
              a Macaneta tem para oferecer.
            </p>

            <Link
              href="/reserva"
              className="inline-flex items-center justify-center rounded-full bg-[#b78a32] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#956f24]"
            >
              Fazer uma reserva
            </Link>
          </div>

        </div>
      </div>


      {/* LINHA INFERIOR */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/45 sm:flex-row sm:text-left lg:px-8">

          <p>
            © {new Date().getFullYear()} Macaneta Beach House.
            Todos os direitos reservados.
          </p>

          <p>
            Macaneta • Marracuene • Moçambique
          </p>

        </div>

      </div>

    </footer>
  );
}