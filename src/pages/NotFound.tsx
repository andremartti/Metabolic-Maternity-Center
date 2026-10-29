import { PageIntro } from '../components/PageIntro';
import { ROUTES } from '../content/site';
import { Link } from '../router';

export function NotFound() {
  return (
    <>
      <PageIntro eyebrow="Página no encontrada" title="Esta página no existe." lead="Vuelve al inicio para seguir navegando." />
      <div className="container" style={{ paddingBottom: 'var(--section-y)' }}>
        <Link to={ROUTES.home} className="btn">
          Ir al inicio
        </Link>
      </div>
    </>
  );
}
