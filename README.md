# Metabolic & Maternity Center — Dr. Javier Girón Alfaro

Sitio web informativo del **Centro de Endocrinología y Ginecología** (Hospital del Valle, San Pedro Sula, Honduras).
Sitio con páginas independientes, construido con React, Vite y TypeScript:

| Página | Ruta |
| --- | --- |
| Inicio | `#/` |
| Conoce al doctor | `#/conoce-al-doctor` |
| Especialidades | `#/especialidades` |
| Horarios | `#/horarios` |
| Contacto | `#/contacto` |
| Solicitar información (formulario) | `#/solicitar-informacion` |

Las rutas usan `#` para funcionar en GitHub Pages sin configuración de servidor.

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
| **Horarios de atención** | `src/content/site.ts` → `SCHEDULE` (y `SCHEDULE_NOTE`) |
| Servicio del formulario | `src/content/site.ts` → `INQUIRY_FORM` |
| Contenido pendiente: logotipo oficial, foto del doctor, biografía, credenciales, política de privacidad | `src/content/site.ts` → `PENDING` |
| Fotografías | `src/content/images.ts` |
| Colores institucionales y tipografía | `src/styles/tokens.css` |
| Título SEO, descripción, Open Graph, datos estructurados | `index.html` |

### Contenido provisional (identificado en pantalla)
- **Logotipo:** símbolo oficial (monograma JG) en `public/brand/` (original y versión de 160 px de alto, solo recortado
  el margen blanco, sin alterar colores ni proporciones), acompañado del nombre de la marca en texto.
  Favicons e ícono de iOS generados a partir del mismo símbolo. Si se dispone de una versión SVG o con fondo transparente, sustituirla.
- **Horarios:** los siete días muestran «Por confirmar» hasta que se completen en `SCHEDULE`.
- **Fotografía del doctor:** retrato oficial en `public/images/dr-javier-giron-*.webp` (hero y sección del doctor).
- **Biografía y credenciales del doctor:** aparecen como espacios reservados con la etiqueta "pendiente".
  Al completar `PENDING.biography` y `PENDING.credentials` se muestran automáticamente.
- **Fotografías generales:** imágenes ilustrativas de Unsplash (licencia Unsplash) cargadas desde su CDN.
  No representan al consultorio ni a su personal. Recomendado: descargarlas o sustituirlas por fotos propias
  autorizadas en `public/images/` (formato WebP, ~1400 px de ancho) y actualizar `src/content/images.ts`.
  Si una imagen no carga, se muestra una composición gráfica con los colores de la marca.
- **Política de privacidad:** el enlace del pie solo aparece cuando se define `PENDING.privacyPolicyUrl`.
- **Mapa:** Google Maps incrustado y enlaces a Google Maps / Waze ubican el Hospital del Valle por nombre (`LINKS` en `src/content/site.ts`). No se indica piso ni número de consultorio.
- **Dominio:** al tenerlo, añade `<link rel="canonical">`, `og:url` y convierte `og:image` en URL absoluta en `index.html`.

## Formulario «Solicitar información»

El formulario envía nombre, correo, teléfono (opcional), tipo de solicitud y mensaje al correo del centro mediante
[FormSubmit](https://formsubmit.co), sin backend propio ni claves privadas en el código.

**Activación (una sola vez):** el primer envío hace que FormSubmit mande un correo de confirmación a
drgironendocrinologo@outlook.com. Hay que abrirlo y pulsar **Activate Form**; desde ese momento los mensajes llegan
a la bandeja (revisar también la carpeta de correo no deseado). Hasta activarlo, el formulario muestra un aviso de
error con el correo directo, nunca un falso «enviado».

El formulario solo confirma el envío cuando el servicio responde con éxito. Pide consentimiento explícito para no
incluir información clínica e incluye un campo trampa contra bots.

Para usar otro servicio (por ejemplo Formspree), cambia `INQUIRY_FORM.endpoint` por la URL del formulario.

## Reglas de contenido
No se publican horarios, precios, tratamientos, testimonios, reseñas, estadísticas ni credenciales sin confirmación
del Dr. Girón. El sitio no recoge datos de pacientes: las solicitudes se hacen por WhatsApp, teléfono o correo.

## Estructura

```
src/
  pages/        Home, Doctor, Specialties, Schedule, Contact, RequestInfo, NotFound
  components/   Header, Footer, Logo, PageIntro, ContactChannels, ScheduleCard, InquiryForm, MapCard, Faq, Photo, Icons
  content/      site.ts (datos, rutas, horarios, formulario), images.ts (fotografías)
  router.tsx    enrutador por hash
  hooks/        useReveal (animación al hacer scroll)
  styles/       tokens.css (paleta y tipografía), base.css
public/         favicon, imagen para redes (og-image.png), robots.txt
```

Tipografías autoalojadas (Manrope y Fraunces vía Fontsource): no dependen de servicios externos.
Las animaciones respetan la preferencia del sistema de "reducir movimiento".
