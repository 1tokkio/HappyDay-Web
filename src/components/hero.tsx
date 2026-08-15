import type { CSSProperties } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { waLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import zanquistas from "../../public/images/zanquistas.jpg";

const STATS = [
  { value: "6", label: "categorías de servicios" },
  { value: "3 días", label: "para tu cotización" },
  { value: "100%", label: "a domicilio" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className="hero-in mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase"
            style={{ "--d": "0ms" } as CSSProperties}
          >
            Producción de eventos en Puerto Montt
          </p>
          <h1
            className="hero-in text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
            style={{ "--d": "70ms" } as CSSProperties}
          >
            Tu evento, armado donde tú estás
          </h1>
          <p
            className="hero-in mt-5 max-w-[48ch] text-lg text-ink-soft"
            style={{ "--d": "140ms" } as CSSProperties}
          >
            Comida, juegos, animación y magia para cumpleaños, celebraciones
            de fin de año y eventos corporativos. Nos trasladamos a tu lugar
            en Puerto Montt y alrededores, y nos encargamos de todo.
          </p>

          <div
            className="hero-in mt-8 flex flex-wrap items-center gap-3.5"
            style={{ "--d": "210ms" } as CSSProperties}
          >
            <a
              href="#cotizar"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Cotizar mi evento
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
            >
              Ver servicios
            </a>
          </div>

          <div
            className="hero-in mt-5"
            style={{ "--d": "270ms" } as CSSProperties}
          >
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

          <div
            className="hero-in mt-11 flex flex-wrap gap-9"
            style={{ "--d": "330ms" } as CSSProperties}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-2xl">{stat.value}</b>
                <span className="text-sm text-ink-soft">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-in relative hidden md:block"
          style={{ "--d": "160ms" } as CSSProperties}
        >
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-c5-soft" />
          <div className="absolute -bottom-6 -right-4 h-16 w-16 rounded-full bg-c2-soft" />
          <div className="group relative -rotate-2 overflow-hidden rounded-2xl border-4 border-surface shadow-2xl">
            <Image
              src={zanquistas}
              alt="Zanquistas y personajes navideños de Happy Day animando un evento"
              className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              placeholder="blur"
              priority
            />
          </div>
          <div className="absolute -right-4 top-8 h-3.5 w-3.5 rounded-full bg-c3" />
          <div className="absolute -left-3 bottom-16 h-2.5 w-2.5 rounded-full bg-c4" />
        </div>
      </div>
    </section>
  );
}
