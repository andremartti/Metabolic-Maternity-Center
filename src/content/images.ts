/**
 * Fotografías del sitio.
 *
 * Provisional: fotografías de Unsplash (licencia Unsplash, uso comercial permitido) servidas desde su CDN.
 * Son imágenes genéricas de entornos clínicos y no representan al consultorio, sus instalaciones
 * ni a su personal. Para producción se recomienda descargarlas (o sustituirlas por fotografías propias
 * autorizadas), guardarlas en /public/images en formato .webp y cambiar `src` por la ruta local,
 * p. ej. 'images/hero.webp'.
 *
 * Si una imagen no carga, el componente <Photo> muestra una composición gráfica de la marca,
 * de modo que el diseño nunca queda roto.
 */

export type PhotoAsset = {
  src: string;
  alt: string;
  /** Punto focal para object-position */
  focus?: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=72`;

export const PHOTOS = {
  hero: {
    src: unsplash('photo-1631217868264-e5b90bb7e133'),
    alt: 'Consultorio médico moderno y luminoso (fotografía ilustrativa)',
    focus: '50% 50%',
  },
  intro: {
    src: unsplash('photo-1551601651-2a8555f1a136'),
    alt: 'Profesional de la salud tomando notas durante una consulta (fotografía ilustrativa)',
    focus: '50% 40%',
  },
  endocrinology: {
    src: unsplash('photo-1579684385127-1ef15d508118'),
    alt: 'Estetoscopio sobre una superficie clara (fotografía ilustrativa)',
    focus: '50% 50%',
  },
  gynecology: {
    src: unsplash('photo-1584515933487-779824d29309'),
    alt: 'Entorno clínico con materiales médicos (fotografía ilustrativa)',
    focus: '50% 50%',
  },
  contact: {
    src: unsplash('photo-1519494026892-80bbd2d6fd0d'),
    alt: 'Interior de un hospital con luz natural (fotografía ilustrativa)',
    focus: '50% 50%',
  },
} satisfies Record<string, PhotoAsset>;
