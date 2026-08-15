"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#cotizar", label: "Cotizar" },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7 shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--c1-soft)" />
      <path
        d="M12 24c3-6 5-10 11-13"
        stroke="var(--c1)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="26" cy="14" r="2.4" fill="var(--c3)" />
      <circle cx="14" cy="27" r="2" fill="var(--c2)" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-border shadow-[0_1px_0_0_var(--border),0_8px_20px_-12px_var(--shadow)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-bold"
        >
          <BrandMark />
          Happy Day
        </a>

        <nav className="hidden gap-7 text-sm text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#cotizar"
            className="hidden items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97] md:inline-flex"
          >
            Cotizar evento
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-transform active:scale-[0.94] md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-[fade-in-down_0.2s_ease-out] border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-ink-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cotizar"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white"
          >
            Cotizar evento
          </a>
        </nav>
      )}
    </header>
  );
}
