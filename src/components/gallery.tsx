import { Reveal } from "./reveal";

const TILES = [
  { caption: "Cumpleaños infantil", from: "var(--c1)", to: "var(--c3)" },
  { caption: "Fiesta de fin de año", from: "var(--c2)", to: "var(--c4)" },
  { caption: "Show de mago", from: "var(--c3)", to: "var(--c5)" },
  { caption: "Navidad con Pascuero", from: "var(--c4)", to: "var(--c1)" },
  { caption: "Algodón de azúcar y dulces", from: "var(--c5)", to: "var(--c2)" },
  { caption: "Animación en vivo", from: "var(--c1)", to: "var(--c4)" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-[60ch]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl">Momentos que hemos creado</h2>
          <p className="mt-3.5 text-lg text-ink-soft">
            Un vistazo a los eventos que hemos producido.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.caption} delay={(i % 3) * 40}>
              <div className="relative flex aspect-4/3 items-end overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: [
                      "radial-gradient(circle at 18% 26%, rgba(255,255,255,0.35) 0 3px, transparent 4px)",
                      "radial-gradient(circle at 68% 58%, rgba(255,255,255,0.28) 0 2px, transparent 3px)",
                      "radial-gradient(circle at 46% 82%, rgba(255,255,255,0.28) 0 2px, transparent 3px)",
                      "radial-gradient(circle at 84% 20%, rgba(255,255,255,0.25) 0 2px, transparent 3px)",
                      `linear-gradient(135deg, ${tile.from}, ${tile.to})`,
                    ].join(", "),
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 to-black/0 to-55%" />
                <span className="relative z-10 px-4 py-3.5 text-sm font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                  {tile.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-sm italic text-ink-soft">
          Imágenes de referencia — se reemplazan por fotos reales de tus
          eventos.
        </p>
      </div>
    </section>
  );
}
