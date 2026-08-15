export const WHATSAPP_NUMBER = "56974101536";
export const WHATSAPP_DISPLAY = "+56 9 7410 1536";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quiero cotizar un evento con Happy Day";
