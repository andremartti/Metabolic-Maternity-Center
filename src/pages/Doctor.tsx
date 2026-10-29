import { PageIntro } from '../components/PageIntro';
import { PENDING, ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import { Clock } from '../components/Icons';
import './Doctor.css';

export function Doctor() {
  return (
    <>
      <PageIntro eyebrow="Conoce al doctor" title={<>Dr. Javier <em>Girón Alfaro</em></>} lead="Endocrinólogo · Centro de Endocrinología y Ginecología" />

      <section className="doctor" aria-label="Perfil del doctor">
        <div className="container doctor__grid">
          <figure className="doctor__portrait reveal">
            {PENDING.doctorPhoto ? (
              <img
                className="doctor__photo"
                src={PENDING.doctorPhoto}
                srcSet="images/dr-javier-giron-640.webp 640w, images/dr-javier-giron-1000.webp 1000w"
                sizes="(max-width: 900px) 92vw, 40vw"
                width={1000}
                height={1000}
                alt={`Retrato del ${SITE.doctor}`}
              />
            ) : (
              <div className="doctor__placeholder" role="img" aria-label="Fotografía oficial pendiente">
                <span className="pending-tag">Fotografía oficial pendiente</span>
              </div>
            )}
            <span className="doctor__accent" aria-hidden="true" />
          </figure>

          <div className="doctor__copy">
            <dl className="doctor__facts reveal">
              <div>
                <dt>Nombre</dt>
                <dd>{SITE.doctor}</dd>
              </div>
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

            <div className="doctor__block reveal">
              <h2>Biografía</h2>
              {PENDING.biography ? (
                PENDING.biography.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p className="doctor__pending">
                  <span className="pending-tag">Pendiente de confirmación</span>
                  Se publicará la biografía profesional confirmada por el doctor.
                </p>
              )}
            </div>

            <div className="doctor__block reveal">
              <h2>Credenciales</h2>
              {PENDING.credentials ? (
                <ul>
                  {PENDING.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              ) : (
                <p className="doctor__pending">
                  <span className="pending-tag">Pendiente de confirmación</span>
                  Solo se mostrarán credenciales verificadas.
                </p>
              )}
            </div>

            <div className="doctor__actions reveal">
              <Link to={ROUTES.contact} className="btn">
                Solicitar una cita
              </Link>
              <Link to={ROUTES.schedule} className="btn btn--ghost">
                <Clock /> Ver horarios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
