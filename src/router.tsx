import { useEffect, useState, type AnchorHTMLAttributes } from 'react';
import type { RoutePath } from './content/site';

/**
 * Enrutador mínimo por hash (#/ruta).
 * Funciona en GitHub Pages y en cualquier hosting estático sin reglas de reescritura.
 */
const readPath = () => {
  const raw = window.location.hash.replace(/^#/, '');
  const path = raw.split('?')[0];
  return path.startsWith('/') ? path : '/';
};

export function usePath() {
  const [path, setPath] = useState(readPath);
  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return path;
}

export const href = (to: RoutePath) => `#${to}`;

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: RoutePath };

export function Link({ to, ...rest }: LinkProps) {
  return <a href={href(to)} {...rest} />;
}
