import { PHOTOS } from '../content/images';
import { LINKS, SITE } from '../content/site';
import { ArrowUpRight, Facebook, Mail, MapPin, Phone, WhatsApp } from './Icons';
import { Photo } from './Photo';
import './Contact.css';

export function Contact() {
  return (
    <section id="contacto" className="section section--soft contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__copy">
          <div className="section-head">
            <p className="eyebrow reveal">Ubicación y contacto</p>
            <h2 id="contact-title" className="h2 reveal">
              Estamos aquí <em>para ayudarte.</em>
            </h2>
          </div>

          <address className="contact__card reveal">
            <p className="contact__org">
              <strong>{SITE.tradeName}</strong>
              <span>{SITE.doctor}</span>
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__ico"><MapPin /></span>
                <span>
                  <span className="contact__label">Ubicación</span>
                  {SITE.location.place}, {SITE.location.city}, {SITE.location.country}
                </span>
              </li>
              <li>
                <span className="contact__ico"><Phone /></span>
                <span>
                  <span className="contact__label">Teléfono y WhatsApp</span>
                  <a href={LINKS.phone}>{SITE.phoneDisplay}</a>
                </span>
              </li>
              <li>
                <span className="contact__ico"><Mail /></span>
                <span>
                  <span className="contact__label">Correo electrónico</span>
                  <a href={LINKS.email} className="contact__email">{SITE.email}</a>
                </span>
              </li>
              <li>
                <span className="contact__ico"><Facebook /></span>
                <span>
                  <span className="contact__label">Facebook</span>
                  <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
                    {SITE.brand}
                  </a>
                </span>
              </li>
            </ul>
          </address>

          <div className="contact__map reveal">
            <iframe
              src={LINKS.mapEmbed}
              title={`Mapa: ${SITE.location.place}, ${SITE.location.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact__map-actions">
              <a className="btn btn--ghost btn--sm" href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer">
                <MapPin /> Abrir en Google Maps
              </a>
              <a className="btn btn--ghost btn--sm" href={LINKS.waze} target="_blank" rel="noopener noreferrer">
                <MapPin /> Ir con Waze
              </a>
            </div>
          </div>
        </div>

        <div className="contact__side">
          <Photo photo={PHOTOS.contact} className="contact__photo reveal" sizes="(max-width: 900px) 92vw, 44vw" />

          <div className="contact__cta reveal">
            <h3>Solicita tu cita por WhatsApp</h3>
            <p>
              Te enviaremos a una conversación con el consultorio con un mensaje listo para enviar. El consultorio te
              indicará los horarios disponibles y el procedimiento para agendar.
            </p>
            <a className="btn contact__wa" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsApp /> Iniciar conversación por WhatsApp
            </a>
            <div className="contact__alt">
              <a className="btn btn--ghost btn--sm" href={LINKS.phone}>
                <Phone /> Llamar
              </a>
              <a className="btn btn--ghost btn--sm" href={LINKS.email}>
                <Mail /> Enviar correo
              </a>
              <a className="btn btn--ghost btn--sm" href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook /> Facebook <ArrowUpRight />
              </a>
            </div>
            <p className="contact__fine">
              Este sitio no agenda citas ni almacena tus datos: la conversación ocurre directamente con el consultorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
