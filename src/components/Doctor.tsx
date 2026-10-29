import { LINKS, PENDING, SITE } from '../content/site';
import { WhatsApp } from './Icons';
import './Doctor.css';

export function Doctor() {
  return (
    <section id="doctor" className="section doctor" aria-labelledby="doctor-title">
      <div className="container doctor__grid">
        <div className="doctor__portrait reveal">
          {PENDING.doctorPhoto ? (
            <img
              className="doctor__photo"
              src={PENDING.doctorPhoto}
              srcSet="images/dr-javier-giron-640.webp 640w, images/dr-javier-giron-1000.webp 1000w"
              sizes="(max-width: 900px) 360px, 40vw"
              width={1000}
              height={1000}
              alt={`Retrato del ${SITE.doctor}`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="doctor__placeholder" role="img" aria-label="Espacio reservado para la fotografía oficial del doctor">
              <span className="doctor__monogram" aria-hidden="true">
                JG
              </span>
              <span className="pending-tag">Fotografía oficial pendiente</span>
            </div>
          )}
          <span className="doctor__accent" aria-hidden="true" />
        </div>

        <div className="doctor__copy">
          <p className="eyebrow reveal">Sobre el doctor</p>
          <h2 id="doctor-title" className="h2 reveal">
            Conoce al <br />
            <em>{SITE.doctor}</em>
          </h2>

          <dl className="doctor__facts reveal">
            <div>
              <dt>Especialidad</dt>
              <dd>Endocrinología</dd>
            </div>
            <div>
              <dt>Centro</dt>
              <dd>
                {SITE.tradeName}
                <span>{SITE.brand}</span>
              </dd>
            </div>
            <div>
              <dt>Consultorio</dt>
              <dd>
                {SITE.location.place}
                <span>
                  {SITE.location.city}, {SITE.location.country}
                </span>
              </dd>
            </div>
          </dl>

          <div className="doctor__bio reveal">
            {PENDING.biography ? (
              PENDING.biography.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <div className="doctor__pending">
                <span className="pending-tag">Contenido pendiente de confirmación</span>
                <p>
                  Espacio reservado para la biografía profesional del {SITE.doctor}: formación, trayectoria y enfoque
                  de atención, tal como el doctor la confirme.
                </p>
              </div>
            )}
          </div>

          <div className="doctor__creds reveal">
            <h3>Credenciales verificadas</h3>
            {PENDING.credentials ? (
              <ul>
                {PENDING.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : (
              <p className="doctor__creds-pending">
                Se publicarán únicamente las credenciales confirmadas por el doctor.
              </p>
            )}
          </div>

          <div className="reveal">
            <a className="btn" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsApp /> Solicitar una cita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
