"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
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
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Cotizar evento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
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
