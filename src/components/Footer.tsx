import { LINKS, NAV, PENDING, ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import { Facebook, WhatsApp } from './Icons';
import { Logo } from './Logo';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p className="site-footer__doctor">{SITE.doctor}</p>
            <p className="site-footer__motto">“{SITE.tagline}”</p>
            <div className="site-footer__social">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp del consultorio">
                <WhatsApp />
              </a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook de ${SITE.brand}`}>
                <Facebook />
              </a>
            </div>
          </div>

          <nav className="site-footer__col" aria-label="Páginas del sitio">
            <h2>Páginas</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link to={ROUTES.request}>Solicitar información</Link>
              </li>
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2>Especialidades</h2>
            <ul>
              <li><Link to={ROUTES.specialties}>Endocrinología</Link></li>
              <li><Link to={ROUTES.specialties}>Ginecología</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Contacto</h2>
            <ul>
              <li>{SITE.location.place}<br />{SITE.location.city}, {SITE.location.country}</li>
              <li><a href={LINKS.phone}>{SITE.phoneDisplay}</a></li>
              <li><a href={LINKS.email} className="site-footer__email">{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__notice">
          <p>
            <strong>Aviso médico:</strong> el contenido de este sitio tiene fines exclusivamente informativos y no
            sustituye la consulta, el diagnóstico ni la evaluación de un profesional de la salud. Ante cualquier
            síntoma o duda, consulta con un médico. En caso de emergencia, acude al servicio de urgencias más cercano.
          </p>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {SITE.brand} · {SITE.tradeName}
          </p>
          {PENDING.privacyPolicyUrl && <a href={PENDING.privacyPolicyUrl}>Política de privacidad</a>}
        </div>
      </div>
    </footer>
  );
}
