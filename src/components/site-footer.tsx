import Image from "next/image";
import { Mail } from "lucide-react";
import { WhatsAppIcon, FacebookIcon } from "./social-icons";
import { WHATSAPP_NUMBER, CONTACT_EMAIL, FACEBOOK_URL } from "@/lib/constants";
import logo from "../../public/images/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="rounded-2xl bg-white p-2.5 shadow-sm">
            <Image src={logo} alt="Happy Day · Producción de Eventos" className="h-14 w-14 object-contain" />
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-ink-soft">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <FacebookIcon className="h-4 w-4" /> Eventos Happy Day
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-2 text-sm text-ink-soft">
          <span>Puerto Montt · Nos trasladamos a tu comuna para hacer tu evento realidad.</span>
          <span>&copy; {new Date().getFullYear()} Happy Day Eventos</span>
        </div>
      </div>
    </footer>
  );
}
