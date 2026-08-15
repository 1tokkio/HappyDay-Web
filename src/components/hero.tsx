import { MessageCircle } from "lucide-react";
import { waLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

const STATS = [
  { value: "+8", label: "servicios disponibles" },
  { value: "24h", label: "tiempo de respuesta" },
  { value: "100%", label: "a domicilio" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-22 pt-16 md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.8fr]">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Producción de eventos a domicilio
          </p>
          <h1 className="text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            Tu evento, armado donde tú estás
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-ink-soft">
            Comida, juegos, animación y magia para cumpleaños, celebraciones
            de fin de año y fiestas familiares. Nos trasladamos a tu lugar y
            nos encargamos de todo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#cotizar"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Cotizar mi evento
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-5">
            <a
              href={waLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-whatsapp"
            >
              <MessageCircle className="h-[18px] w-[18px] text-whatsapp" />
              o escríbenos directo por WhatsApp
            </a>
          </div>

          <div className="mt-11 flex flex-wrap gap-9">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-2xl">{stat.value}</b>
                <span className="text-sm text-ink-soft">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden h-80 md:block" aria-hidden="true">
          <div
            className="absolute left-10 top-2 h-56 w-56 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-c1-soft motion-safe:animate-[float-blob_9s_ease-in-out_infinite]"
          />
          <div
            className="absolute left-44 top-30 h-38 w-38 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-c3-soft motion-safe:animate-[float-blob_11s_ease-in-out_infinite] motion-safe:[animation-delay:-3s]"
          />
          <div
            className="absolute left-55 top-0 h-30 w-30 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-c2-soft motion-safe:animate-[float-blob_7.5s_ease-in-out_infinite] motion-safe:[animation-delay:-1.2s]"
          />
          <div className="absolute right-5 top-10 h-3.5 w-3.5 rounded-full bg-c4 motion-safe:animate-[bob_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-15 left-5 h-2.5 w-2.5 rounded-full bg-c5 motion-safe:animate-[bob_6s_ease-in-out_infinite] motion-safe:[animation-delay:-2s]" />
          <div className="absolute bottom-8 right-15 h-2.5 w-2.5 rounded-full bg-c2 motion-safe:animate-[bob_6s_ease-in-out_infinite] motion-safe:[animation-delay:-4s]" />
        </div>
      </div>
    </section>
  );
}
