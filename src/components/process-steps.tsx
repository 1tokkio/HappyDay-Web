import { Reveal } from "./reveal";

const STEPS = [
  {
    title: "Cuéntanos tu evento",
    description: "Fecha, lugar, número de invitados y lo que estás imaginando.",
  },
  {
    title: "Armamos tu cotización",
    description:
      "Elegimos contigo los servicios y te enviamos una propuesta clara.",
  },
  {
    title: "Confirmas tu fecha",
    description: "Reservamos el día y coordinamos cada detalle logístico.",
  },
  {
    title: "Vivimos el evento contigo",
    description: "Llegamos al lugar y nos encargamos de que todo funcione.",
  },
];

export function ProcessSteps() {
  return (
    <section id="proceso" className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-[60ch]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-4xl">De la idea al día del evento</h2>
          <p className="mt-3.5 text-lg text-ink-soft">
            Un proceso simple para que solo tengas que preocuparte de
            disfrutar tu celebración.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div>
                <div className="mb-4 flex h-9.5 w-9.5 items-center justify-center rounded-full border border-border font-display text-lg text-accent">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-base font-bold">{step.title}</h3>
                <p className="text-sm text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
