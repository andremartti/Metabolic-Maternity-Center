import { useEffect, useRef } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ROUTES, SITE } from './content/site';
import { useReveal } from './hooks/useReveal';
import { Contact } from './pages/Contact';
import { Doctor } from './pages/Doctor';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { RequestInfo } from './pages/RequestInfo';
import { Schedule } from './pages/Schedule';
import { Specialties } from './pages/Specialties';
import { usePath } from './router';

const HOME_TITLE = `${SITE.doctor} | Endocrinología y Ginecología en San Pedro Sula`;

const PAGES: Record<string, { title: string; render: () => JSX.Element }> = {
  [ROUTES.home]: { title: HOME_TITLE, render: () => <Home /> },
  [ROUTES.doctor]: { title: `Conoce al ${SITE.doctor} | ${SITE.brand}`, render: () => <Doctor /> },
  [ROUTES.specialties]: { title: `Especialidades: endocrinología y ginecología | ${SITE.brand}`, render: () => <Specialties /> },
  [ROUTES.schedule]: { title: `Horarios de atención | ${SITE.brand}`, render: () => <Schedule /> },
  [ROUTES.contact]: { title: `Contacto y ubicación | ${SITE.brand}`, render: () => <Contact /> },
  [ROUTES.request]: { title: `Solicitar información | ${SITE.brand}`, render: () => <RequestInfo /> },
};

export default function App() {
  const path = usePath();
  const page = PAGES[path];
  const mainRef = useRef<HTMLElement>(null);
  const first = useRef(true);

  useReveal(path);

  // Al cambiar de página: título, scroll arriba y foco en el título (lectores de pantalla).
  useEffect(() => {
    document.title = page?.title ?? `Página no encontrada | ${SITE.brand}`;
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    mainRef.current?.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
  }, [path, page]);

  return (
    <>
      <a
        className="skip-link"
        href="#contenido"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.querySelector<HTMLElement>('h1')?.focus();
        }}
      >
        Saltar al contenido
      </a>
      <Header path={path} />
      <main id="contenido" ref={mainRef} key={path} className="page">
        {page ? page.render() : <NotFound />}
      </main>
      <Footer />
    </>
  );
}
