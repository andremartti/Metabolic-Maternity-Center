import type { CSSProperties } from 'react';
import { ContactChannels } from '../components/ContactChannels';
import { ArrowRight, Clock, MapPin } from '../components/Icons';
import { Photo } from '../components/Photo';
import { PHOTOS } from '../content/images';
import { ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import './Home.css';

const d = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties;

export function Home() {

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow reveal">{SITE.brandKicker}</p>
            <p className="home-hero__name reveal" style={d(60)}>
              {SITE.doctor}
            </p>
            <h1 id="home-title" className="display reveal" style={d(120)} tabIndex={-1}>
              Hormonas saludables, <em>vida saludable.</em>
            </h1>
            <p className="lead home-hero__lead reveal" style={d(180)}>
              Endocrinología y ginecología en el {SITE.location.place}, {SITE.location.city}.
            </p>
            <div className="home-hero__actions reveal" style={d(240)}>
              <Link to={ROUTES.contact} className="btn">
                Solicitar una cita
              </Link>
              <Link to={ROUTES.schedule} className="btn btn--ghost">
                <Clock /> Horarios de atención
              </Link>
            </div>
          </div>

          <div className="home-hero__visual reveal" style={d(100)}>
            <span className="home-hero__ring" aria-hidden="true" />
            <span className="home-hero__dot" aria-hidden="true" />
            <Photo photo={PHOTOS.hero} className="home-hero__photo" priority sizes="(max-width: 900px) 92vw, 44vw" />
            <p className="home-hero__badge">
              <MapPin /> {SITE.location.place}
            </p>
          </div>
        </div>
      </section>

      <section className="section home-explore" aria-labelledby="explore-title">
        <div className="container">
          <h2 id="explore-title" className="h2 home-explore__title reveal">
            Encuentra lo que <em>necesitas.</em>
          </h2>

          <div className="explore">
            <Link to={ROUTES.doctor} className="tile tile--doctor reveal">
              <img className="tile__symbol" src="brand/logo-symbol-160.png" alt="" width={199} height={160} />
              <span className="tile__body">
                <span className="tile__kicker">01</span>
                <span className="tile__title">Conoce al doctor</span>
                <span className="tile__text">{SITE.doctor}, endocrinólogo.</span>
                <span className="tile__more">
                  Ver perfil <ArrowRight />
                </span>
              </span>
            </Link>

            <Link to={ROUTES.specialties} className="tile tile--spec reveal" style={d(80)}>
              <span className="tile__kicker">02</span>
              <span className="tile__title">Nuestras especialidades</span>
              <span className="tile__list">
                <span>Endocrinología</span>
                <span>Ginecología</span>
              </span>
              <span className="tile__more">
                Ver especialidades <ArrowRight />
              </span>
            </Link>

            <Link to={ROUTES.schedule} className="tile tile--hours reveal" style={d(160)}>
              <span className="tile__icon">
                <Clock />
              </span>
              <span className="tile__kicker">03</span>
              <span className="tile__title">Horarios de atención</span>
              <span className="tile__text">
                Días y horas del consultorio, en un solo lugar.
              </span>
              <span className="tile__more">
                Ver horarios <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft home-contact" aria-labelledby="home-contact-title">
        <div className="container">
          <div className="home-contact__head">
            <h2 id="home-contact-title" className="h2 reveal">
              ¿Hablamos?
            </h2>
            <Link to={ROUTES.contact} className="text-link reveal">
              Ubicación y contacto <ArrowRight />
            </Link>
          </div>
          <ContactChannels compact />
        </div>
      </section>
    </>
  );
}
