"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Comida y dulces",
  "Inflables y cama elástica",
  "Animación y personajes",
  "Fotografía y espejo selfie",
  "Audio y ambientación",
  "Mago",
  "Navidad con Pascuero",
  "No estoy seguro / quiero orientación",
];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "loading" | "success" | "error" | "not-configured";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("not-configured");
      return;
    }

    setStatus("loading");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-c2" />
        <h3 className="text-lg font-bold">¡Listo! Enviamos tu solicitud.</h3>
        <p className="max-w-[38ch] text-sm text-ink-soft">
          Te contactaremos dentro de 24 horas por correo o WhatsApp con tu
          cotización.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4.5 rounded-2xl border border-border bg-surface p-8">
      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <Field label="Nombre completo" htmlFor="nombre">
          <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className={inputClass} />
        </Field>
        <Field label="Teléfono / WhatsApp" htmlFor="telefono">
          <input id="telefono" name="telefono" type="tel" required placeholder="+56 9 ..." className={inputClass} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <Field label="Correo electrónico" htmlFor="correo">
          <input id="correo" name="correo" type="email" required placeholder="tu@correo.cl" className={inputClass} />
        </Field>
        <Field label="Tipo de evento" htmlFor="tipo">
          <select id="tipo" name="tipo" className={inputClass} defaultValue="Cumpleaños infantil">
            <option>Cumpleaños infantil</option>
            <option>Navidad / fin de año</option>
            <option>Evento corporativo</option>
            <option>Otro</option>
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <Field label="Fecha estimada" htmlFor="fecha">
          <input id="fecha" name="fecha" type="date" className={inputClass} />
        </Field>
        <Field label="Número de invitados" htmlFor="invitados">
          <input id="invitados" name="invitados" type="number" min={1} placeholder="Ej: 30" className={inputClass} />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-1.5 text-sm font-semibold">Servicios de interés</legend>
        <div className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
          {SERVICE_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-2 font-normal">
              <input type="checkbox" name="servicios" value={option} className="h-4 w-4 accent-accent" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Cuéntanos más" htmlFor="detalle">
        <textarea
          id="detalle"
          name="detalle"
          placeholder="Lugar del evento, comuna, ideas o requerimientos especiales..."
          className={`${inputClass} min-h-[90px] resize-y`}
        />
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por{" "}
          <a href={waLink("Hola, quiero cotizar un evento con Happy Day")} className="font-semibold underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
      )}

      {status === "not-configured" && (
        <p className="flex items-center gap-2 text-sm text-c3">
          <AlertCircle className="h-4 w-4 shrink-0" />
          El formulario aún no está conectado. Configura
          NEXT_PUBLIC_FORMSPREE_ID o escríbenos directo por{" "}
          <a href={waLink("Hola, quiero cotizar un evento con Happy Day")} className="font-semibold underline" target="_blank" rel="noopener noreferrer">
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="justify-self-start rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar cotización"}
      </button>

      <input type="hidden" name="_subject" value="Nueva cotización — Happy Day Eventos" />
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent";

export function QuoteSection() {
  return (
    <section id="cotizar" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Cotizar o reservar
          </p>
          <h2 className="text-3xl md:text-4xl">
            Pídenos una propuesta para tu evento
          </h2>
          <p className="mt-3.5 max-w-[42ch] text-lg text-ink-soft">
            Cuéntanos qué estás celebrando y qué servicios te interesan. Te
            enviamos una cotización a medida.
          </p>
          <div className="mt-7 rounded-xl border border-border bg-surface p-4.5 text-sm text-ink-soft">
            Respondemos dentro de 24 horas por correo electrónico. Si
            prefieres hablar directo, escríbenos por{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-whatsapp no-underline"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            .
          </div>
        </Reveal>

        <Reveal delay={80}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
