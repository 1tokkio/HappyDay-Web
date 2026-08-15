import { WhatsAppIcon } from "./social-icons";
import { waLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5.5 right-5.5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-107 motion-reduce:transition-none"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
