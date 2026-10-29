import type { ReactNode } from 'react';
import './PageIntro.css';

type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; aside?: ReactNode };

/** Encabezado común de las páginas interiores. */
export function PageIntro({ eyebrow, title, lead, aside }: Props) {
  return (
    <header className="page-intro">
      <div className="container page-intro__grid">
        <div className="page-intro__copy">
          <p className="eyebrow reveal">{eyebrow}</p>
          <h1 className="page-intro__title reveal" tabIndex={-1}>
            {title}
          </h1>
          {lead && <p className="lead page-intro__lead reveal">{lead}</p>}
        </div>
        {aside && <div className="page-intro__aside reveal">{aside}</div>}
      </div>
    </header>
  );
}
