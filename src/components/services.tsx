import {
  ClipboardList,
  Candy,
  Gamepad2,
  Drama,
  Camera,
  Music4,
  Wand2,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

type Accent = 1 | 2 | 3 | 4 | 5;

const ACCENT_CLASSES: Record<Accent, string> = {
  1: "bg-c1-soft text-c1",
  2: "bg-c2-soft text-c2",
  3: "bg-c3-soft text-c3",
  4: "bg-c4-soft text-c4",
  5: "bg-c5-soft text-c5",
};

const SERVICES: {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
}[] = [
  {
    icon: ClipboardList,
    accent: 1,
    title: "Producción integral",
    description:
      "Coordinamos cada detalle de tu evento, desde el ambiente hasta el cronograma del día.",
  },
  {
    icon: Candy,
    accent: 2,
    title: "Comida y dulces",
    description:
      "Helados, banquetería, dulces, algodón de azúcar y palomitas para tu celebración.",
  },
  {
    icon: Gamepad2,
    accent: 3,
    title: "Inflables y cama elástica",
    description:
      "Diversión asegurada para niños y jóvenes durante todo el evento.",
  },
  {
    icon: Drama,
    accent: 4,
    title: "Animación y personajes",
    description:
      "Animadores, zanquistas y personajes que hacen bailar y reír a los más chicos.",
  },
  {
    icon: Camera,
    accent: 5,
    title: "Fotografía y espejo selfie",
    description:
      "Un camarógrafo registra cada momento y un espejo mágico para las fotos del recuerdo.",
  },
  {
    icon: Music4,
    accent: 1,
    title: "Audio y ambientación",
    description:
      "Sonido, música y decoración para que el lugar se sienta como una fiesta.",
  },
  {
    icon: Wand2,
    accent: 2,
    title: "Mago",
    description: "Un show de magia que sorprende a grandes y chicos.",
  },
  {
    icon: Gift,
    accent: 3,
    title: "Navidad con Pascuero",
    description:
      "El Viejito Pascuero visita tu evento y entrega los regalos en persona.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-[60ch]">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 40}>
              <div className="flex h-full flex-col gap-3.5 rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-[10px] ${ACCENT_CLASSES[service.accent]}`}
                >
                  <service.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold">{service.title}</h3>
                <p className="text-sm text-ink-soft">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
