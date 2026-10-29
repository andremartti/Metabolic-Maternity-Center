import { useId, useState, type ReactNode } from 'react';
import { Plus } from './Icons';
import './Faq.css';

export type FaqItem = { q: string; a: ReactNode };

/** Acordeón accesible: botones con aria-expanded y paneles con role="region". */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="faq__panel" hidden={!isOpen}>
              <div className="faq__answer">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
