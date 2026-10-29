# Metabolic & Maternity Center — Dr. Javier Girón Alfaro

Sitio web informativo del **Centro de Endocrinología y Ginecología** (Hospital del Valle, San Pedro Sula, Honduras).
Página de una sola vista con contacto directo por WhatsApp, construida con React, Vite y TypeScript.

## Ejecutar en local

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # compila a /dist (incluye verificación de tipos)
npm run preview   # sirve el build de producción en http://localhost:4173
```

## Publicar

### GitHub Pages (configurado)
1. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que compila el sitio y lo publica en la rama `gh-pages`.
2. GitHub Pages sirve la rama `gh-pages` (Settings → Pages → Source: *Deploy from a branch* → `gh-pages` / `root`).
3. La URL será `https://<usuario>.github.io/<repositorio>/`. El build usa rutas relativas (`base: './'`),
   así que funciona igual en un subdirectorio o en un dominio propio.

### Otro hosting (Netlify, Vercel, Cloudflare Pages, hosting compartido)
Comando de build `npm run build`, carpeta de salida `dist`. También se puede subir el contenido de `dist/` por FTP.

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Datos del negocio (teléfono, correo, Facebook, ubicación, mensaje de WhatsApp) | `src/content/site.ts` |
| Contenido pendiente: logotipo oficial, foto del doctor, biografía, credenciales, política de privacidad | `src/content/site.ts` → `PENDING` |
| Fotografías | `src/content/images.ts` |
| Colores institucionales y tipografía | `src/styles/tokens.css` |
| Título SEO, descripción, Open Graph, datos estructurados | `index.html` |

### Contenido provisional (identificado en pantalla)
- **Logotipo:** se muestra un logotipo tipográfico provisional con el nombre y los colores de la marca.
  Para usar el oficial, copia el archivo a `public/brand/` (SVG o PNG con fondo transparente) y define
  `PENDING.logo = 'brand/logo.svg'`. El archivo se muestra tal cual, sin alterarlo.
- **Favicon** (`public/favicon.svg`, `public/apple-touch-icon.png`): monograma provisional; sustituir por el símbolo oficial.
- **Fotografía, biografía y credenciales del doctor:** aparecen como espacios reservados con la etiqueta
  "pendiente". Al completar `PENDING.doctorPhoto`, `PENDING.biography` y `PENDING.credentials` se muestran automáticamente.
- **Fotografías generales:** imágenes ilustrativas de Unsplash (licencia Unsplash) cargadas desde su CDN.
  No representan al consultorio ni a su personal. Recomendado: descargarlas o sustituirlas por fotos propias
  autorizadas en `public/images/` (formato WebP, ~1400 px de ancho) y actualizar `src/content/images.ts`.
  Si una imagen no carga, se muestra una composición gráfica con los colores de la marca.
- **Política de privacidad:** el enlace del pie solo aparece cuando se define `PENDING.privacyPolicyUrl`.
- **Mapa:** no se incluye hasta confirmar la dirección exacta del consultorio.
- **Dominio:** al tenerlo, añade `<link rel="canonical">`, `og:url` y convierte `og:image` en URL absoluta en `index.html`.

## Reglas de contenido
No se publican horarios, precios, tratamientos, testimonios, reseñas, estadísticas ni credenciales sin confirmación
del Dr. Girón. El sitio no recoge datos de pacientes: las solicitudes se hacen por WhatsApp, teléfono o correo.

## Estructura

```
src/
  components/   Header, Hero, Intro, Specialties, Doctor, Trust, Faq, Contact, Footer, FloatingWhatsApp…
  content/      site.ts (datos), images.ts (fotografías)
  hooks/        useReveal (animación al hacer scroll), useActiveSection (menú activo)
  styles/       tokens.css (paleta y tipografía), base.css
public/         favicon, imagen para redes (og-image.png), robots.txt
```

Tipografías autoalojadas (Manrope y Fraunces vía Fontsource): no dependen de servicios externos.
Las animaciones respetan la preferencia del sistema de "reducir movimiento".
