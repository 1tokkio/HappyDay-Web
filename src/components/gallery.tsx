"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";
import zanquistas from "../../public/images/zanquistas.jpg";
import baileEntretenido from "../../public/images/baile-entretenido.jpg";
import staffCarrito from "../../public/images/staff-carrito.jpg";
import santaGlobo from "../../public/images/santa-globo.jpg";
import juegoAnillas from "../../public/images/juego-anillas.jpg";
import cabina360 from "../../public/images/cabina-360.jpg";
import corporeos from "../../public/images/corporeos.jpg";
import espejoMagico from "../../public/images/espejo-magico.jpg";

const TILES = [
  { img: zanquistas, caption: "Zanquistas y personajes navideños" },
  { img: baileEntretenido, caption: "Baile entretenido" },
  { img: staffCarrito, caption: "Carrito de dulces" },
  { img: santaGlobo, caption: "El Viejito Pascuero" },
  { img: juegoAnillas, caption: "Juegos de habilidad" },
  { img: cabina360, caption: "Plataforma 360°" },
  { img: corporeos, caption: "Corpóreos animados" },
  { img: espejoMagico, caption: "Espejo mágico" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % TILES.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + TILES.length) % TILES.length));
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <section id="galeria" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-[60ch]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl">Así se viven nuestros eventos</h2>
          <p className="mt-3.5 text-lg text-ink-soft">
            Un vistazo a los eventos que hemos producido. Haz clic en una
            foto para verla en grande.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <Reveal key={tile.caption} delay={(i % 4) * 40}>
              <TiltCard max={6}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Ver foto en grande: ${tile.caption}`}
                  className="group relative flex aspect-square w-full items-end overflow-hidden rounded-xl text-left"
                >
                  <Image
                    src={tile.img}
                    alt={tile.caption}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/0 to-60% transition-opacity duration-300 group-hover:from-black/80" />
                  <span className="relative z-10 translate-y-1 px-4 py-3.5 text-sm font-bold text-white opacity-90 transition-all duration-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] group-hover:translate-y-0 group-hover:opacity-100">
                    {tile.caption}
                  </span>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-[fade-in-down_0.2s_ease-out]"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={TILES[openIndex].caption}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i - 1 + TILES.length) % TILES.length));
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i + 1) % TILES.length));
            }}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full overflow-hidden rounded-xl">
              <Image
                src={TILES[openIndex].img}
                alt={TILES[openIndex].caption}
                className="max-h-[75vh] w-full object-contain"
                placeholder="blur"
              />
            </div>
            <p className="text-center text-sm font-semibold text-white">
              {TILES[openIndex].caption}
              <span className="ml-2 font-normal text-white/50">
                {openIndex + 1} / {TILES.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
