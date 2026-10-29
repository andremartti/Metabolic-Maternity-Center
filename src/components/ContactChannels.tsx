import { LINKS, ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import { ArrowRight, Mail, Phone, WhatsApp } from './Icons';
import './ContactChannels.css';

/**
 * Los tres canales, cada uno con su propósito:
 * WhatsApp para consultas rápidas, teléfono para quien prefiere llamar,
 * correo para solicitudes de información y cotizaciones.
 */
export function ContactChannels({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`channels ${compact ? 'channels--compact' : ''}`}>
      <li className="channel channel--phone reveal">
        <span className="channel__icon"><Phone /></span>
        <p className="channel__purpose">Si prefieres llamar</p>
        <h3 className="channel__title">Teléfono</h3>
        <a className="channel__value" href={LINKS.phone}>{SITE.phoneDisplay}</a>
        <a className="btn btn--sm" href={LINKS.phone}>
          <Phone /> Llamar
        </a>
      </li>
      <li className="channel channel--wa reveal" style={{ ['--delay' as string]: '80ms' }}>
        <span className="channel__icon"><WhatsApp /></span>
        <p className="channel__purpose">Consultas rápidas</p>
        <h3 className="channel__title">WhatsApp</h3>
        <span className="channel__value">{SITE.phoneDisplay}</span>
        <a className="btn btn--ghost btn--sm" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
          <WhatsApp /> Escribir por WhatsApp
        </a>
      </li>
      <li className="channel channel--mail reveal" style={{ ['--delay' as string]: '160ms' }}>
        <span className="channel__icon"><Mail /></span>
        <p className="channel__purpose">Información y cotizaciones</p>
        <h3 className="channel__title">Correo electrónico</h3>
        <a className="channel__value channel__value--email" href={LINKS.email}>{SITE.email}</a>
        <Link to={ROUTES.request} className="btn btn--ghost btn--sm">
          Solicitar información <ArrowRight />
        </Link>
      </li>
    </ul>
  );
}
