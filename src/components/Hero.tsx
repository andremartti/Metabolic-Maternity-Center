import type { CSSProperties } from 'react';
import { PHOTOS } from '../content/images';
import { LINKS, SITE } from '../content/site';
import { ArrowRight, MapPin, WhatsApp } from './Icons';
import { Photo } from './Photo';
import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__kicker reveal">
            {SITE.brandKicker} · {SITE.doctor}
          </p>

          <h1 id="hero-title" className="display reveal" style={{ '--delay': '80ms' } as CSSProperties}>
            Tu salud hormonal merece <em>atención especializada.</em>
          </h1>

          <p className="hero__lead lead reveal" style={{ '--delay': '160ms' } as CSSProperties}>
            Conoce nuestras áreas de atención en endocrinología y ginecología, y comunícate con nuestro
            consultorio para recibir información sobre tus necesidades de atención médica.
          </p>

          <div className="hero__actions reveal" style={{ '--delay': '240ms' } as CSSProperties}>
            <a className="btn" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsApp />
              Solicitar una cita
            </a>
            <a className="btn btn--ghost" href="#especialidades">
              Conocer nuestras especialidades
              <ArrowRight />
            </a>
          </div>

          <dl className="hero__facts reveal" style={{ '--delay': '320ms' } as CSSProperties}>
            <div>
              <dt>Especialidades</dt>
              <dd>{SITE.specialties.join(' · ')}</dd>
            </div>
            <div>
              <dt>Ubicación</dt>
              <dd>
                {SITE.location.place}, {SITE.location.city}
              </dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual reveal" style={{ '--delay': '120ms' } as CSSProperties}>
          <span className="hero__ring" aria-hidden="true" />
          <span className="hero__dot" aria-hidden="true" />
          <Photo
            photo={PHOTOS.hero}
            className="hero__photo"
            priority
            sizes="(max-width: 900px) 92vw, 46vw"
            widths={[640, 1000, 1500]}
          />
          <figure className="hero__motto">
            <span className="hero__motto-mark" aria-hidden="true">“</span>
            <blockquote>{SITE.tagline}</blockquote>
            <figcaption>{SITE.brand}</figcaption>
          </figure>
          <p className="hero__place">
            <MapPin />
            {SITE.location.city}, {SITE.location.country}
          </p>
        </div>
      </div>
    </section>
  );
}
