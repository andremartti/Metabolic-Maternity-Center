import { InquiryForm } from '../components/InquiryForm';
import { Mail, Phone } from '../components/Icons';
import { PageIntro } from '../components/PageIntro';
import { LINKS, SITE } from '../content/site';
import './RequestInfo.css';

export function RequestInfo() {
  return (
    <>
      <PageIntro
        eyebrow="Solicitar información"
        title={
          <>
            Escríbenos, <em>te respondemos por correo.</em>
          </>
        }
        lead="Consultas administrativas e información o cotización de servicios."
      />

      <section className="request" aria-label="Formulario de solicitud">
        <div className="container request__grid">
          <div className="reveal">
            <InquiryForm />
          </div>

          <aside className="request__aside reveal" style={{ ['--delay' as string]: '100ms' }}>
            <h2>Útil para</h2>
            <ul>
              <li>Información general del centro</li>
              <li>Cotización de servicios</li>
              <li>Otros trámites administrativos</li>
            </ul>
            <p className="request__notice">
              Este formulario no es para consultas médicas ni urgencias. Ante una emergencia, acude al servicio de urgencias más cercano.
            </p>
            <div className="request__alt">
              <a href={LINKS.email}>
                <Mail /> {SITE.email}
              </a>
              <a href={LINKS.phone}>
                <Phone /> {SITE.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
