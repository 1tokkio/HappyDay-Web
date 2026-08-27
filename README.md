# Happy Day Eventos

Sitio web de Happy Day Eventos — productora de eventos a domicilio en
Puerto Montt (cumpleaños, Navidad/fin de año, eventos corporativos).
Next.js + Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo funciona la reserva/cotización

El formulario de la sección "Cotizar" no usa backend ni servicio de
formularios: arma un mensaje con los datos ingresados y abre WhatsApp
(`wa.me`) con ese mensaje ya escrito, listo para que el cliente solo
confirme el envío. El número de destino está en
`src/lib/constants.ts` (`WHATSAPP_NUMBER`).

## Estructura

- `src/app/page.tsx` — ensambla las secciones de la página.
- `src/components/` — un componente por sección (header, hero, quiénes
  somos, servicios por categoría, galería, proceso, formulario de
  reserva por WhatsApp, footer, botón flotante de WhatsApp, toggle de
  tema).
- `src/lib/constants.ts` — número de WhatsApp, correo de contacto, link
  de Facebook, y el helper para generar links `wa.me` con mensaje
  prellenado.
- `src/app/globals.css` — tokens de color (claro/oscuro) y tipografía.
  El tema por defecto es claro; el modo oscuro se activa manualmente
  con el botón del header y se guarda en `localStorage`.
- `public/images/` — fotos reales de eventos y el logo oficial.

## Desplegar en Vercel

```bash
npx vercel
```

O conecta el repositorio en [vercel.com/new](https://vercel.com/new).
No se necesita configurar ninguna variable de entorno.
