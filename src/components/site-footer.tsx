import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "./social-icons";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold">
            <svg viewBox="0 0 40 40" className="h-6.5 w-6.5" aria-hidden="true">
              <circle cx="20" cy="20" r="19" fill="var(--c1-soft)" />
              <path
                d="M12 24c3-6 5-10 11-13"
                stroke="var(--c1)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            Happy Day · Producción de Eventos
          </div>

          <div className="flex items-center gap-5 text-sm text-ink-soft">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-ink">
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-ink">
              <FacebookIcon className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-2 text-sm text-ink-soft">
          <span>Nos trasladamos a tu comuna para hacer tu evento realidad.</span>
          <span>&copy; {new Date().getFullYear()} Happy Day Eventos</span>
        </div>
      </div>
    </footer>
  );
}
