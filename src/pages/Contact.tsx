import { ContactChannels } from '../components/ContactChannels';
import { Faq, type FaqItem } from '../components/Faq';
import { ArrowUpRight, Facebook } from '../components/Icons';
import { MapCard } from '../components/MapCard';
import { PageIntro } from '../components/PageIntro';
import { LINKS, ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import './Contact.css';

const FAQ: FaqItem[] = [
  {
    q: '¿Cómo solicito una cita?',
    a: <p>Llama o escribe por WhatsApp al {SITE.phoneDisplay}. El consultorio te indicará la disponibilidad y cómo agendar.</p>,
  },
  {
    q: '¿Dónde está el consultorio?',
    a: (
      <p>
        En el {SITE.location.place}, {SITE.location.city}. Para llegar al consultorio dentro del hospital, consulta por
        teléfono.
      </p>
    ),
  },
  {
    q: '¿Cómo consulto los horarios?',
    a: (
      <p>
        En la página de <Link to={ROUTES.schedule}>horarios de atención</Link>, o directamente con el consultorio.
      </p>
    ),
  },
  {
    q: '¿Cómo pido información o una cotización?',
    a: (
      <p>
        Usa el formulario de <Link to={ROUTES.request}>solicitar información</Link> o escribe a{' '}
        <a href={LINKS.email}>{SITE.email}</a>.
      </p>
    ),
  },
];

export function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title={
          <>
            Estamos aquí <em>para ayudarte.</em>
          </>
        }
        lead={`${SITE.tradeName} · ${SITE.doctor}`}
      />

      <section className="contact-page" aria-label="Canales de contacto">
        <div className="container">
          <ContactChannels />
        </div>
      </section>

      <section className="section contact-where" aria-labelledby="where-title">
        <div className="container contact-where__grid">
          <div className="contact-where__copy reveal">
            <h2 id="where-title" className="h2">
              Ubicación
            </h2>
            <p className="lead">
              {SITE.location.place}
              <br />
              {SITE.location.city}, {SITE.location.country}
            </p>
            <a className="contact-where__fb" href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook /> Síguenos en Facebook <ArrowUpRight />
            </a>
          </div>
          <div className="reveal">
            <MapCard />
          </div>
        </div>
      </section>

      <section className="section section--soft contact-faq" aria-labelledby="faq-title">
        <div className="container contact-faq__grid">
          <h2 id="faq-title" className="h2 reveal">
            Preguntas <em>frecuentes</em>
          </h2>
          <div className="reveal">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
