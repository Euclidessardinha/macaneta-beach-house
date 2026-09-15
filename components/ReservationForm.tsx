"use client";

import { FormEvent, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
  Home,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  accommodation: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodation: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove o erro do campo enquanto o cliente corrige
    if (errors[name as keyof FormData]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Nome
    if (!formData.name.trim()) {
      newErrors.name = "Introduza o seu nome completo.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Introduza o seu email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Introduza um email válido.";
    }

    // Telefone
    if (!formData.phone.trim()) {
      newErrors.phone = "Introduza o seu número de telefone.";
    } else if (!/^[0-9+\s()-]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Introduza um número de telefone válido.";
    }

    // Check-in
    if (!formData.checkIn) {
      newErrors.checkIn = "Selecione a data de entrada.";
    }

    // Check-out
    if (!formData.checkOut) {
      newErrors.checkOut = "Selecione a data de saída.";
    }

    // Verificar datas
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);

      if (checkOut <= checkIn) {
        newErrors.checkOut =
          "A data de saída deve ser posterior à entrada.";
      }
    }

    // Hóspedes
    if (!formData.guests) {
      newErrors.guests = "Selecione o número de hóspedes.";
    }

    // Alojamento
    if (!formData.accommodation) {
      newErrors.accommodation =
        "Selecione o tipo de alojamento.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulação de envio.
    // Mais tarde podemos ligar isto ao backend/Supabase/email.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      accommodation: "",
      message: "",
    });

    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#d8c79f] bg-white shadow-[0_25px_80px_rgba(23,35,29,0.12)]">
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#b78a32]" />

            <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5efe2]">
              <CheckCircle2
                size={42}
                strokeWidth={1.5}
                className="text-[#b78a32]"
              />
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a32]">
              Pedido preparado
            </p>

            <h2 className="font-serif text-3xl text-[#17231d] sm:text-4xl">
              Obrigado, {formData.name.split(" ")[0]}.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              O seu pedido de reserva foi preenchido com sucesso nesta
              demonstração. A próxima etapa será ligar este formulário
              ao sistema de reservas para que a equipa possa receber e
              responder ao pedido.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#faf8f3] p-5 text-left">
              <div className="flex items-center gap-3">
                <CalendarDays
                  size={19}
                  className="text-[#b78a32]"
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Estadia
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#17231d]">
                    {formData.checkIn} → {formData.checkOut}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Home size={19} className="text-[#b78a32]" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Alojamento
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#17231d]">
                    {formData.accommodation}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Users size={19} className="text-[#b78a32]" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Hóspedes
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#17231d]">
                    {formData.guests}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#17231d] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26382f]"
            >
              Fazer novo pedido
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#17231d] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#b78a32] focus:ring-4 focus:ring-[#b78a32]/10";

  const labelBase =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-600";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="overflow-hidden rounded-[2rem] border border-[#e8e1d4] bg-white shadow-[0_25px_80px_rgba(23,35,29,0.10)]"
    >
      {/* Cabeçalho do formulário */}
      <div className="border-b border-[#eee8dc] bg-[#faf8f3] px-6 py-7 sm:px-10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#17231d] text-[#f5d27a]">
            <CalendarDays size={22} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a32]">
              Pedido de reserva
            </p>

            <h2 className="mt-1 font-serif text-2xl text-[#17231d]">
              Conte-nos sobre a sua estadia
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Preencha os seus dados e indique as datas pretendidas.
            </p>
          </div>
        </div>
      </div>

      {/* Corpo */}
      <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
        {/* Dados pessoais */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5efe2] text-xs font-semibold text-[#b78a32]">
              01
            </span>

            <h3 className="font-serif text-xl text-[#17231d]">
              Os seus dados
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Nome */}
            <div className="md:col-span-2">
              <label htmlFor="name" className={labelBase}>
                Nome completo
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex.: João Manuel"
                  autoComplete="name"
                  className={`${inputBase} pl-11 ${
                    errors.name
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                      : "border-[#e5dfd3]"
                  }`}
                />
              </div>

              {errors.name && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelBase}>
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  autoComplete="email"
                  className={`${inputBase} pl-11 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                      : "border-[#e5dfd3]"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="phone" className={labelBase}>
                Telefone
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+258 84 000 0000"
                  autoComplete="tel"
                  className={`${inputBase} pl-11 ${
                    errors.phone
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                      : "border-[#e5dfd3]"
                  }`}
                />
              </div>

              {errors.phone && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Detalhes da estadia */}
        <div className="border-t border-[#eee8dc] pt-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5efe2] text-xs font-semibold text-[#b78a32]">
              02
            </span>

            <h3 className="font-serif text-xl text-[#17231d]">
              Detalhes da estadia
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Check-in */}
            <div>
              <label htmlFor="checkIn" className={labelBase}>
                Data de entrada
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  min={today}
                  value={formData.checkIn}
                  onChange={handleChange}
                  className={`${inputBase} pl-11 ${
                    errors.checkIn
                      ? "border-red-400"
                      : "border-[#e5dfd3]"
                  }`}
                />
              </div>

              {errors.checkIn && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.checkIn}
                </p>
              )}
            </div>

            {/* Check-out */}
            <div>
              <label htmlFor="checkOut" className={labelBase}>
                Data de saída
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  min={formData.checkIn || today}
                  value={formData.checkOut}
                  onChange={handleChange}
                  className={`${inputBase} pl-11 ${
                    errors.checkOut
                      ? "border-red-400"
                      : "border-[#e5dfd3]"
                  }`}
                />
              </div>

              {errors.checkOut && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.checkOut}
                </p>
              )}
            </div>

            {/* Hóspedes */}
            <div>
              <label htmlFor="guests" className={labelBase}>
                Número de hóspedes
              </label>

              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none pl-11 pr-11 ${
                    errors.guests
                      ? "border-red-400"
                      : "border-[#e5dfd3]"
                  } ${
                    !formData.guests ? "text-gray-400" : ""
                  }`}
                >
                  <option value="">Selecione</option>
                  <option value="1 hóspede">1 hóspede</option>
                  <option value="2 hóspedes">2 hóspedes</option>
                  <option value="3 hóspedes">3 hóspedes</option>
                  <option value="4 hóspedes">4 hóspedes</option>
                  <option value="5 hóspedes">5 hóspedes</option>
                  <option value="6 hóspedes">6 hóspedes</option>
                  <option value="7 hóspedes">7 hóspedes</option>
                  <option value="8 hóspedes">8 hóspedes</option>
                  <option value="9 hóspedes">9 hóspedes</option>
                  <option value="10 hóspedes">10 hóspedes</option>
                  <option value="Mais de 10 hóspedes">
                    Mais de 10 hóspedes
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              {errors.guests && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.guests}
                </p>
              )}
            </div>

            {/* Alojamento */}
            <div>
              <label
                htmlFor="accommodation"
                className={labelBase}
              >
                Tipo de alojamento
              </label>

              <div className="relative">
                <Home
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <select
                  id="accommodation"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none pl-11 pr-11 ${
                    errors.accommodation
                      ? "border-red-400"
                      : "border-[#e5dfd3]"
                  } ${
                    !formData.accommodation
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                  <option value="">Selecione</option>
                  <option value="Casa T1">Casa T1</option>
                  <option value="Casa T2">Casa T2</option>
                  <option value="Casa T3">Casa T3</option>
                  <option value="Casa T4">Casa T4</option>
                  <option value="Casa T5">Casa T5</option>
                  <option value="Apartamento">
                    Apartamento
                  </option>
                  <option value="Suite">Suite</option>
                  <option value="Ainda não decidi">
                    Ainda não decidi
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              {errors.accommodation && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.accommodation}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mensagem */}
        <div className="border-t border-[#eee8dc] pt-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5efe2] text-xs font-semibold text-[#b78a32]">
              03
            </span>

            <h3 className="font-serif text-xl text-[#17231d]">
              Algum pedido especial?
            </h3>
          </div>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva aqui alguma informação adicional que gostaria de partilhar..."
              className={`${inputBase} resize-none pl-11 pt-3.5 border-[#e5dfd3]`}
            />
          </div>
        </div>

        {/* Botão */}
        <div className="border-t border-[#eee8dc] pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#17231d] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26382f] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                A preparar pedido...
              </>
            ) : (
              <>
                Enviar pedido de reserva
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-gray-400">
            Ao enviar, os seus dados serão usados apenas para tratar
            do pedido de reserva nesta demonstração.
          </p>
        </div>
      </div>
    </form>
  );
}