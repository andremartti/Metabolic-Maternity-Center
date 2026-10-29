import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { LINKS, NAV, ROUTES, SITE } from '../content/site';
import { Link } from '../router';
import { Close, Menu, Phone } from './Icons';
import { Logo } from './Logo';
import './Header.css';

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menú móvil: Escape para cerrar, bloqueo de scroll y foco en el primer enlace.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => mq.matches && setOpen(false);

    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container site-header__bar">
        <Link to={ROUTES.home} className="site-header__brand" aria-label={`${SITE.brand}, ir al inicio`}>
          <Logo />
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} aria-current={path === item.to ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link to={ROUTES.request} className="btn btn--sm site-header__cta">
            Solicitar información
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="mobile-menu"
        hidden={!open}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <nav aria-label="Navegación móvil" className="container">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.to} style={{ '--i': i } as CSSProperties}>
                <Link to={item.to} aria-current={path === item.to ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__foot">
            <Link to={ROUTES.request} className="btn">
              Solicitar información
            </Link>
            <a className="mobile-menu__phone" href={LINKS.phone}>
              <Phone /> {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
