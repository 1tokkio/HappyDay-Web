import Image from "next/image";
import { Reveal } from "./reveal";
import veterquimica from "../../public/images/logo-veterquimica.png";
import uach from "../../public/images/logo-uach.png";
import blumar from "../../public/images/logo-blumar.png";

const LOGOS = [
  { src: veterquimica, alt: "Veterquímica" },
  { src: uach, alt: "Universidad Austral de Chile, sede Puerto Montt" },
  { src: blumar, alt: "Blumar" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface-alt py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-10 text-center text-xs font-bold tracking-[0.12em] text-ink-soft uppercase">
            Empresas e instituciones que han confiado en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
            {LOGOS.map((logo) => (
              <div key={logo.alt} className="flex h-28 w-64 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-28 w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
