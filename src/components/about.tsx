import Image from "next/image";
import { Reveal } from "./reveal";
import staffCarrito from "../../public/images/staff-carrito.jpg";

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-accent uppercase">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-4xl">
            Alegría que se traslada a su lugar
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Somos una productora de eventos de{" "}
            <strong className="font-semibold text-ink">Puerto Montt</strong>,
            con experiencia en celebraciones para empresas, colegios y
            personas naturales.
          </p>
          <p className="mt-4 text-lg text-ink-soft">
            Nos trasladamos al lugar de su actividad y la llenamos de
            colores, juegos y alegría, con un equipo de staff y monitores
            con la preparación que cada actividad necesita.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="group overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={staffCarrito}
              alt="Equipo de Happy Day en el carrito de palomitas y algodón de azúcar"
              className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              placeholder="blur"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
