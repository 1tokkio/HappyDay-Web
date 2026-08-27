"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./social-icons";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Animación infantil",
  "Juegos varios",
  "Sector peque (2 a 5 años)",
  "Amplificación",
  "Servicios adicionales",
  "Carritos (palomitas / algodón)",
  "No estoy seguro / quiero orientación",
];

function buildReservationMessage(data: FormData) {
  const nombre = String(data.get("nombre") || "").trim();
  const telefono = String(data.get("telefono") || "").trim();
  const correo = String(data.get("correo") || "").trim();
  const tipo = String(data.get("tipo") || "").trim();
  const fecha = String(data.get("fecha") || "").trim();
  const invitados = String(data.get("invitados") || "").trim();
  const servicios = data.getAll("servicios").join(", ");
  const detalle = String(data.get("detalle") || "").trim();

  const lines = [
    "Hola, quiero reservar un evento con Happy Day 🎉",
    "",
    `*Nombre:* ${nombre}`,
    `*Teléfono:* ${telefono}`,
  ];
  if (correo) lines.push(`*Correo:* ${correo}`);
  lines.push(`*Tipo de evento:* ${tipo}`);
  if (fecha) lines.push(`*Fecha estimada:* ${fecha}`);
  if (invitados) lines.push(`*N° de invitados:* ${invitados}`);
  if (servicios) lines.push(`*Servicios de interés:* ${servicios}`);
  if (detalle) lines.push(`*Detalles:* ${detalle}`);

  return lines.join("\n");
}

export function QuoteForm() {
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = buildReservationMessage(new FormData(e.currentTarget));
    const url = waLink(message);
    const win = window.open(url, "_blank", "noopener,noreferrer");

    setWaUrl(url);
    setPopupBlocked(!win);
  }

  if (waUrl) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-c2" />
        <h3 className="text-lg font-bold">¡Tu mensaje está listo!</h3>
        {popupBlocked ? (
          <>
            <p className="max-w-[38ch] text-sm text-ink-soft">
              Tu navegador bloqueó la ventana emergente. Haz clic para abrir
              WhatsApp con tu solicitud ya escrita.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Abrir WhatsApp
            </a>
          </>
        ) : (
          <p className="max-w-[38ch] text-sm text-ink-soft">
            Te abrimos WhatsApp con tu solicitud ya escrita — solo confirma
            el envío allá.
          </p>
        )}
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
          <input id="correo" name="correo" type="email" placeholder="tu@correo.cl" className={inputClass} />
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

      <p className="flex items-start gap-2 text-xs text-ink-soft">
        <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Al enviar, abrimos WhatsApp con estos datos ya escritos en un
        mensaje para {WHATSAPP_DISPLAY}. Tú confirmas el envío desde ahí.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 justify-self-start rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" />
        Reservar por WhatsApp
      </button>
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
            Completa el formulario y te abrimos WhatsApp con todo listo
            para enviar — así hablamos directo y coordinamos tu evento más
            rápido.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-surface-alt p-5">
              <p className="mb-1.5 font-display text-base font-semibold text-c2">
                Para cotizar
              </p>
              <p className="text-sm text-ink-soft">
                Indícanos cantidad de invitados, lugar, fecha y servicios
                requeridos. Enviamos la propuesta dentro de 3 días hábiles
                para tu revisión.
              </p>
            </div>
            <div className="rounded-xl bg-surface-alt p-5">
              <p className="mb-1.5 font-display text-base font-semibold text-c3">
                Para agendar
              </p>
              <p className="text-sm text-ink-soft">
                Abono del 50% (cotización vigente por 7 días para
                realizarlo). El 50% restante se paga el mismo día del
                evento.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
