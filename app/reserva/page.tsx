import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

import Header from "@/components/Header";
import ReservationForm from "@/components/ReservationForm";

export default function ReservaPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <Header />

      {/* Hero da página */}
      <section className="relative overflow-hidden bg-[#17231d] pt-28 sm:pt-32">
        {/* Elementos decorativos */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b78a32]/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#b78a32]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Pequeno label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8c79f]/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles
                size={14}
                className="text-[#f5d27a]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5d27a] sm:text-xs">
                Planeie a sua estadia
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Faça o seu pedido de
              <span className="block text-[#e2bd62]">
                reserva
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Conte-nos quando pretende visitar a Macaneta Pérola do
              Sul Beach House e escolha o alojamento que pretende.
              A nossa equipa poderá depois confirmar a disponibilidade.
            </p>
          </div>
        </div>

        {/* Transição */}
        <div className="absolute bottom-0 left-0 right-0 h-10 rounded-t-[50%] bg-[#faf8f3]" />
      </section>

      {/* Conteúdo */}
      <section className="relative px-6 pb-20 pt-4 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Voltar */}
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#9b7424]"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Voltar para a página inicial
            </Link>
          </div>

          {/* Formulário */}
          <ReservationForm />

          {/* Segurança / confiança */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e8e1d4] bg-white p-5 text-center">
              <ShieldCheck
                size={22}
                className="mx-auto text-[#b78a32]"
              />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#17231d]">
                Pedido simples
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Preencha os seus dados e datas pretendidas.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e1d4] bg-white p-5 text-center">
              <Sparkles
                size={22}
                className="mx-auto text-[#b78a32]"
              />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#17231d]">
                Experiência
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Planeie uma estadia junto à natureza e ao mar.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e1d4] bg-white p-5 text-center">
              <ShieldCheck
                size={22}
                className="mx-auto text-[#b78a32]"
              />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#17231d]">
                Confirmação
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                A disponibilidade será confirmada pela equipa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé simples */}
      <footer className="border-t border-[#e8e1d4] bg-[#17231d] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Macaneta Pérola do Sul Beach House
          </p>

          <Link
            href="/"
            className="text-xs font-medium text-[#e2bd62] transition-colors hover:text-white"
          >
            Voltar ao início
          </Link>
        </div>
      </footer>
    </main>
  );
}