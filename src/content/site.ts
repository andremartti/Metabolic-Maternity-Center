/**
 * Datos confirmados del negocio.
 * Todo el contenido visible se alimenta de este archivo: edítalo aquí y no en los componentes.
 * Regla de veracidad: no agregar credenciales, horarios, precios, tratamientos ni testimonios
 * que no hayan sido confirmados por el Dr. Girón.
 */

export const SITE = {
  doctor: 'Dr. Javier Girón Alfaro',
  brand: 'Metabolic & Maternity Center',
  tradeName: 'Centro de Endocrinología y Ginecología',
  tagline: 'Hormonas saludables, vida saludable',
  brandKicker: 'Tu endocrinólogo',
  specialties: ['Endocrinología', 'Ginecología'] as const,
  location: {
    place: 'Hospital del Valle',
    city: 'San Pedro Sula',
    country: 'Honduras',
  },
  phoneDisplay: '+504 3269-6797',
  phoneE164: '+50432696797',
  whatsappNumber: '50432696797',
  email: 'drgironendocrinologo@outlook.com',
  facebook: 'https://www.facebook.com/MetabolicMaternityCenter/',
} as const;

export const WHATSAPP_MESSAGE =
  'Hola, quisiera obtener información para solicitar una cita con el Dr. Javier Girón Alfaro. ¿Podrían indicarme los horarios disponibles y el procedimiento para agendar?';

/** wa.me abre la app en móviles y WhatsApp Web en escritorio. */
export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const LINKS = {
  whatsapp: whatsappUrl(),
  phone: `tel:${SITE.phoneE164}`,
  email: `mailto:${SITE.email}?subject=${encodeURIComponent('Solicitud de información — Dr. Javier Girón Alfaro')}`,
  facebook: SITE.facebook,
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Hospital del Valle, San Pedro Sula, Honduras')}`,
  waze: `https://waze.com/ul?q=${encodeURIComponent('Hospital del Valle San Pedro Sula')}&navigate=yes`,
  /** Mapa incrustado (sin API key). Ubica el hospital por nombre; no se fijan coordenadas ni consultorio. */
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent('Hospital del Valle, San Pedro Sula, Honduras')}&z=16&output=embed`,
} as const;

/** Páginas del sitio (navegación por hash: compatible con GitHub Pages sin configuración extra). */
export const ROUTES = {
  home: '/',
  doctor: '/conoce-al-doctor',
  specialties: '/especialidades',
  schedule: '/horarios',
  contact: '/contacto',
  request: '/solicitar-informacion',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const NAV: { to: RoutePath; label: string }[] = [
  { to: ROUTES.home, label: 'Inicio' },
  { to: ROUTES.doctor, label: 'Conoce al doctor' },
  { to: ROUTES.specialties, label: 'Especialidades' },
  { to: ROUTES.schedule, label: 'Horarios' },
  { to: ROUTES.contact, label: 'Contacto' },
];

/**
 * Horarios de atención — PENDIENTES DE CONFIRMAR.
 * Escribe el horario de cada día como texto, p. ej. '8:00 a. m. – 12:00 p. m.' o 'Cerrado'.
 * Mientras el valor sea null, el sitio muestra «Por confirmar». No inventar horarios.
 */
export const SCHEDULE: { day: string; hours: string | null }[] = [
  { day: 'Lunes', hours: null },
  { day: 'Martes', hours: null },
  { day: 'Miércoles', hours: null },
  { day: 'Jueves', hours: null },
  { day: 'Viernes', hours: null },
  { day: 'Sábado', hours: null },
  { day: 'Domingo', hours: null },
];

/** Nota opcional bajo la tabla de horarios (p. ej. «Atención con cita previa»). */
export const SCHEDULE_NOTE: string | null = null;

/**
 * Formulario «Solicitar información».
 * Por defecto usa FormSubmit (https://formsubmit.co): envía al correo del centro sin backend propio
 * ni claves privadas. La primera vez que alguien envíe el formulario, FormSubmit manda un correo
 * de activación a la bandeja del centro; hay que pulsar «Activate Form» una sola vez.
 * Alternativa: crear un formulario en Formspree y poner aquí su URL (https://formspree.io/f/XXXX).
 */
export const INQUIRY_FORM = {
  endpoint: `https://formsubmit.co/ajax/${SITE.email}`,
  subject: 'Nueva solicitud de información desde el sitio web',
};

/**
 * Contenido pendiente de confirmar por el médico.
 * Mientras un valor sea `null`, el sitio muestra un espacio reservado identificable
 * (o lo omite) en lugar de inventar información.
 */
export const PENDING = {
  /** Fotografía oficial autorizada del doctor. */
  doctorPhoto: 'images/dr-javier-giron-1000.webp' as string | null,
  /** Biografía profesional confirmada (párrafos). */
  biography: null as string[] | null,
  /** Credenciales verificadas (formación, colegiación, membresías). */
  credentials: null as string[] | null,
  /** Símbolo oficial (monograma JG). Original sin alterar en public/brand/logo-symbol.png. */
  logo: 'brand/logo-symbol-160.png' as string | null,
  /** URL de la política de privacidad revisada. Si es null, el enlace no se muestra. */
  privacyPolicyUrl: null as string | null,
};
