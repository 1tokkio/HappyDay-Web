# Happy Day Eventos

Sitio web de Happy Day Eventos — productora de eventos a domicilio (cumpleaños,
Navidad/fin de año, eventos corporativos). Next.js + Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configurar el formulario de cotización

El formulario de la sección "Cotizar" envía los datos por correo usando
[Formspree](https://formspree.io) (plan gratuito, hasta 50 envíos/mes).

1. Crea una cuenta en Formspree y un formulario nuevo.
2. Copia el ID del formulario (la parte final de la URL, ej.
   `https://formspree.io/f/abcdwxyz` → el ID es `abcdwxyz`).
3. Copia `.env.example` a `.env.local` y pega el ID:

   ```bash
   cp .env.example .env.local
   ```

   ```
   NEXT_PUBLIC_FORMSPREE_ID=abcdwxyz
   ```

Sin este ID configurado, el formulario muestra un aviso pidiendo
configurarlo y sugiere contactar por WhatsApp en su lugar (no falla en
silencio).

## Estructura

- `src/app/page.tsx` — ensambla las secciones de la página.
- `src/components/` — un componente por sección (hero, servicios, galería,
  proceso, formulario de cotización, footer, botón de WhatsApp).
- `src/lib/constants.ts` — número de WhatsApp y helper para generar links
  `wa.me` con mensaje prellenado.
- `src/app/globals.css` — tokens de color (claro/oscuro) y tipografía.

## Reemplazar contenido de marcador

- **Galería** (`src/components/gallery.tsx`): actualmente son tarjetas con
  degradados de color a modo de marcador. Reemplázalas por fotos reales de
  eventos usando `next/image` cuando estén disponibles.
- **Logo** (`src/components/site-header.tsx`, `site-footer.tsx`,
  `src/app/icon.svg`): ícono genérico inspirado en la marca. Si existe el
  logo original en SVG/PNG con fondo transparente, reemplázalo ahí.

## Desplegar en Vercel

```bash
npx vercel
```

O conecta el repositorio en [vercel.com/new](https://vercel.com/new).
Recuerda configurar `NEXT_PUBLIC_FORMSPREE_ID` como variable de entorno en
el proyecto de Vercel (Settings → Environment Variables), no solo en
`.env.local`.
