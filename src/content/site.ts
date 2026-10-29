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

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'doctor', label: 'Sobre el doctor' },
  { id: 'preguntas', label: 'Preguntas frecuentes' },
  { id: 'contacto', label: 'Contacto' },
] as const;

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
