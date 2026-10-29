import { PageIntro } from '../components/PageIntro';
import { MapPin, Phone, WhatsApp } from '../components/Icons';
import { ScheduleCard } from '../components/ScheduleCard';
import { LINKS, SITE } from '../content/site';
import './Schedule.css';

export function Schedule() {
  return (
    <>
      <PageIntro
        eyebrow="Horarios"
        title={
          <>
            Horarios de <em>atención.</em>
          </>
        }
        lead="Confirma tu cita antes de visitar el consultorio."
      />

      <section className="schedule-page" aria-label="Horarios y confirmación">
        <div className="container schedule-page__grid">
          <div className="reveal">
            <ScheduleCard />
          </div>

          <aside className="schedule-page__aside reveal" style={{ ['--delay' as string]: '100ms' }}>
            <h2>Confirma disponibilidad</h2>
            <p>El consultorio te indica los horarios vigentes y el procedimiento para agendar.</p>
            <div className="schedule-page__actions">
              <a className="btn" href={LINKS.phone}>
                <Phone /> Llamar al {SITE.phoneDisplay}
              </a>
              <a className="btn btn--ghost" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsApp /> Consultar por WhatsApp
              </a>
            </div>
            <p className="schedule-page__place">
              <MapPin />
              <span>
                <strong>{SITE.location.place}</strong>
                {SITE.location.city}, {SITE.location.country}
              </span>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
