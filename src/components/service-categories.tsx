import Image, { type StaticImageData } from "next/image";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";
import jesterGlobos from "../../public/images/jester-globos.jpg";
import corporeos from "../../public/images/corporeos.jpg";
import inflableTeen from "../../public/images/inflable-teen.jpg";
import juegoAnillas from "../../public/images/juego-anillas.jpg";
import pinturaBallpit from "../../public/images/pintura-ballpit.jpg";
import atriles from "../../public/images/atriles.jpg";
import espejoMagico from "../../public/images/espejo-magico.jpg";
import cabina360 from "../../public/images/cabina-360.jpg";
import carritoPalomitas from "../../public/images/carrito-palomitas.jpg";
import algodon from "../../public/images/algodon.jpg";

type Accent = 1 | 2 | 3 | 4 | 5;

const DOT_CLASSES: Record<Accent, string> = {
  1: "bg-c1",
  2: "bg-c2",
  3: "bg-c3",
  4: "bg-c4",
  5: "bg-c5",
};

const TEXT_CLASSES: Record<Accent, string> = {
  1: "text-c1",
  2: "text-c2",
  3: "text-c3",
  4: "text-c4",
  5: "text-c5",
};

function Checklist({ items, accent }: { items: string[]; accent: Accent }) {
  return (
    <ul className="flex flex-1 flex-col justify-center divide-y divide-border">
      {items.map((item) => (
        <li
          key={item}
          className="group flex items-center gap-4 rounded-lg px-2 py-3.5 transition-colors hover:bg-surface-alt"
        >
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125 ${DOT_CLASSES[accent]}`}
          />
          <span className="text-[1.05rem] font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImageStack({
  images,
}: {
  images: { src: StaticImageData; alt: string }[];
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-5">
      {images.map((img) => (
        <div
          key={img.alt}
          className="group overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={img.src}
            alt={img.alt}
            className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-72"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
}

function CategoryBlock({
  eyebrow,
  title,
  accent,
  items,
  images,
  reverse,
  alt,
}: {
  eyebrow: string;
  title: string;
  accent: Accent;
  items: string[];
  images: { src: StaticImageData; alt: string }[];
  reverse?: boolean;
  alt?: boolean;
}) {
  return (
    <div className={alt ? "bg-surface-alt" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-18">
        <div
          className={`flex flex-col gap-10 md:gap-14 ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <Reveal className="flex flex-1 flex-col">
            <p
              className={`mb-3 text-xs font-bold tracking-[0.12em] uppercase ${TEXT_CLASSES[accent]}`}
            >
              {eyebrow}
            </p>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              {title}
            </h3>
            <div className="mt-2">
              <Checklist items={items} accent={accent} />
            </div>
          </Reveal>
          <Reveal delay={80} className="flex flex-1">
            <ImageStack images={images} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export function ServiceCategories() {
  return (
    <section id="servicios">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-4 md:pt-24">
        <Reveal className="max-w-[60ch]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl">
            Todo lo que tu celebración necesita
          </h2>
          <p className="mt-3.5 text-lg text-ink-soft">
            Arma tu evento combinando los servicios que quieras, o pide una
            propuesta completa y nosotros coordinamos el resto.
          </p>
        </Reveal>
      </div>

      <CategoryBlock
        eyebrow="Animación Infantil"
        title="Un equipo que hace magia con los niños"
        accent={2}
        items={[
          "Animadora oficial del evento",
          "Monitoras con divertidos atuendos y colores",
          "Pinta caritas",
          "Globoflexia",
          "Juegos, concursos, competencias y dinámicas",
          "Premios a los participantes",
          "Viejito Pascuero con atuendo acorde",
        ]}
        images={[
          { src: jesterGlobos, alt: "Animador haciendo figuras de globos en un evento Happy Day" },
          { src: corporeos, alt: "Personajes corpóreos animando a los niños en un evento" },
        ]}
      />

      <CategoryBlock
        eyebrow="Juegos Varios"
        title="Diversión para todas las edades"
        accent={3}
        items={[
          "Juegos inflables y toboganes",
          "Camas elásticas",
          "Taca tacas",
          "Mesa de hockey",
          "Toro mecánico",
          "Juegos arcade",
          "Ruleta de la fortuna",
        ]}
        images={[
          { src: inflableTeen, alt: "Juego inflable y cama elástica de Happy Day" },
          { src: juegoAnillas, alt: "Niño jugando a las anillas en un evento Happy Day" },
        ]}
        reverse
        alt
      />

      <CategoryBlock
        eyebrow="Sector Peque · 2 a 5 años"
        title="Una zona segura, solo para los más chicos"
        accent={4}
        items={[
          "Piscina de pelotas",
          "Castillo inflable",
          "Atriles para pintar",
          "Arcos de futbolito",
          "Pasto sintético en el lugar",
        ]}
        images={[
          { src: pinturaBallpit, alt: "Niños pintando junto a la piscina de pelotas" },
          { src: atriles, alt: "Niña pintando en atril en el sector peque" },
        ]}
      />

      <div className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-18">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.12em] text-c5 uppercase">
              Amplificación
            </p>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              El sonido que le pone ritmo a la fiesta
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {[
                "Parlantes de 500W",
                "Consola de sonido",
                "Rack de power",
                "Micrófono inalámbrico",
                "Música infantil y de moda",
                "Técnico operador o DJ",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-c5" />
                  <span className="text-[1.05rem] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <CategoryBlock
        eyebrow="Servicios Adicionales"
        title="Momentos que hacen la diferencia"
        accent={1}
        items={[
          "Zanquistas (bienvenida)",
          "Show de malabares y monociclo (30 min)",
          "Show de magia humorística (30–40 min)",
          "Corpóreos animados de moda",
          "Baile entretenido con instructora profesional",
          "Arco de globos",
          "Decoración de escenario para entrega de regalos",
          "Asiento del Viejito Pascuero",
          "Espejo mágico con cotillón",
          "Plataforma 360° con cabina",
          "Fotógrafo oficial del evento",
          "Arriendo de sillas",
          "Árboles de Navidad",
          "Stand de helados",
        ]}
        images={[
          { src: espejoMagico, alt: "Espejo mágico de fotos en un evento Happy Day" },
          { src: cabina360, alt: "Plataforma 360° con cabina en un evento Happy Day" },
        ]}
        reverse
      />

      <div className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:gap-14">
            <Reveal className="flex flex-1 flex-col justify-center">
              <p className="mb-3 text-xs font-bold tracking-[0.12em] text-c3 uppercase">
                Otros Servicios
              </p>
              <h3 className="font-display text-2xl font-semibold md:text-3xl">
                Para completar la experiencia
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                {["Carrito de palomitas", "Carrito de algodón de azúcar"].map(
                  (item) => (
                    <TiltCard key={item} max={5}>
                      <div className="rounded-xl border-l-8 border-c5 bg-surface px-6 py-5 text-lg font-semibold shadow-sm">
                        {item}
                      </div>
                    </TiltCard>
                  )
                )}
              </div>
            </Reveal>
            <Reveal delay={80} className="flex flex-1">
              <ImageStack
                images={[
                  { src: carritoPalomitas, alt: "Carrito de palomitas de Happy Day" },
                  { src: algodon, alt: "Carrito de algodón de azúcar de Happy Day" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
