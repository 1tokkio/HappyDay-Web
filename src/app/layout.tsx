import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Happy Day Eventos | Producción de eventos a domicilio en Puerto Montt",
  description:
    "Productora de eventos de Puerto Montt: comida, juegos, animación, fotografía y magia para cumpleaños, Navidad y eventos corporativos. Nos trasladamos a tu lugar. Cotiza tu evento hoy.",
};

export const viewport = {
  themeColor: "#ffffff",
};

const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem("happyday-theme");
  if (t === "dark") document.documentElement.dataset.theme = "dark";
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fredoka.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
