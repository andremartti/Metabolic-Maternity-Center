import { PENDING, SITE } from '../content/site';
import './Logo.css';

type Props = { variant?: 'default' | 'compact' | 'inverse' };

/**
 * Identidad del centro: símbolo oficial (PENDING.logo, sin alterar ni recolorear)
 * acompañado del nombre de la marca en texto.
 */
export function Logo({ variant = 'default' }: Props) {
  return (
    <span className={`logo logo--${variant}`}>
      {PENDING.logo && <img className="logo__symbol" src={PENDING.logo} alt="" width={199} height={160} />}
      <span className="logo__text">
        <span className="logo__name">
          <span className="logo__word logo__word--blue">Metabolic</span>
          <span className="logo__amp">&amp;</span>
          <span className="logo__word logo__word--orange">Maternity</span>
          <span className="logo__word logo__word--grey">Center</span>
        </span>
        {variant !== 'compact' && <span className="logo__sub">{SITE.tradeName}</span>}
      </span>
    </span>
  );
}
