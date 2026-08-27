import Image from "next/image";
import veterquimica from "../../public/images/logo-veterquimica.png";
import uach from "../../public/images/logo-uach.png";
import blumar from "../../public/images/logo-blumar.png";

const LOGOS = [
  { src: veterquimica, alt: "Veterquímica", h: "h-9" },
  { src: uach, alt: "Universidad Austral de Chile, sede Puerto Montt", h: "h-14" },
  { src: blumar, alt: "Blumar", h: "h-12" },
];

export function TrustBar() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-border bg-surface-alt py-10">
      <p className="mb-7 text-center text-xs font-bold tracking-[0.12em] text-ink-soft uppercase">
        Empresas e instituciones que han confiado en nosotros
      </p>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((logo, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                className={`${logo.h} w-auto grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
