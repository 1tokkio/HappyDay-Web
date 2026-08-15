import Image from "next/image";
import { Reveal } from "./reveal";
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
  return (
    <section id="galeria" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-[60ch]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl">Así se viven nuestros eventos</h2>
          <p className="mt-3.5 text-lg text-ink-soft">
            Un vistazo a los eventos que hemos producido.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <Reveal key={tile.caption} delay={(i % 4) * 40}>
              <div className="group relative flex aspect-square items-end overflow-hidden rounded-xl">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
