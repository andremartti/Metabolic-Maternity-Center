import { PENDING, SITE } from '../content/site';
import './Logo.css';

type Props = { variant?: 'default' | 'compact' | 'inverse' };

/**
 * Identidad del centro.
 * Si existe el archivo oficial (PENDING.logo) se usa tal cual, sin alterarlo.
 * Mientras tanto se muestra un logotipo tipográfico PROVISIONAL que solo usa el nombre
 * y los colores de la marca: no reproduce ni sustituye el símbolo oficial.
 */
export function Logo({ variant = 'default' }: Props) {
  if (PENDING.logo) {
    return (
      <img
        className={`logo-img logo-img--${variant}`}
        src={PENDING.logo}
        alt={`${SITE.brand} — ${SITE.tradeName}`}
      />
    );
  }

  return (
    <span className={`logo logo--${variant}`} data-provisional="logotipo tipográfico provisional">
      <span className="logo__name">
        <span className="logo__word logo__word--blue">Metabolic</span>
        <span className="logo__amp">&amp;</span>
        <span className="logo__word logo__word--orange">Maternity</span>
        <span className="logo__word logo__word--grey">Center</span>
      </span>
      {variant !== 'compact' && <span className="logo__sub">{SITE.tradeName}</span>}
    </span>
  );
}
