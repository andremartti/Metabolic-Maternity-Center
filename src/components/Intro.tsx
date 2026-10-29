import { PHOTOS } from '../content/images';
import { SITE } from '../content/site';
import { Photo } from './Photo';
import './Intro.css';

export function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="intro__visual reveal">
          <Photo photo={PHOTOS.intro} className="intro__photo" tone="orange" sizes="(max-width: 900px) 92vw, 40vw" />
          <span className="intro__badge">
            <span>{SITE.specialties.length}</span>
            especialidades
            <br />
            en un solo centro
          </span>
        </div>

        <div className="intro__copy">
          <p className="eyebrow reveal">{SITE.brand}</p>
          <h2 id="intro-title" className="h2 reveal">
            Atención especializada, <em>información clara.</em>
          </h2>
          <p className="lead reveal">
            El {SITE.tradeName} reúne dos áreas estrechamente relacionadas con el bienestar: la endocrinología y la
            ginecología. Queremos que cada paciente encuentre aquí información comprensible sobre estas
            especialidades y un canal directo para comunicarse con el consultorio.
          </p>
          <p className="intro__text reveal">
            Una buena atención empieza con una conversación: escuchar tus dudas, explicarte con claridad y orientarte
            sobre cómo solicitar tu consulta. Por eso cuidamos que la comunicación sea sencilla, cercana y directa.
          </p>

          <ul className="intro__pillars reveal" aria-label="Áreas del centro">
            <li>
              <span className="intro__pillar-n">01</span>
              <span className="intro__pillar-t">Endocrinología</span>
              <span className="intro__pillar-d">Salud hormonal y sistema endocrino</span>
            </li>
            <li>
              <span className="intro__pillar-n">02</span>
              <span className="intro__pillar-t">Ginecología</span>
              <span className="intro__pillar-d">Salud ginecológica y reproductiva femenina</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
