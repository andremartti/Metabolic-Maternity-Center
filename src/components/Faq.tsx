import { useId, useState, type ReactNode } from 'react';
import { LINKS, SITE } from '../content/site';
import { Plus, WhatsApp } from './Icons';
import './Faq.css';

const QUESTIONS: { q: string; a: ReactNode }[] = [
  {
    q: '¿Cómo puedo solicitar una cita?',
    a: (
      <>
        <p>
          La forma más rápida es escribir por{' '}
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp al {SITE.phoneDisplay}
          </a>
          . El consultorio te indicará los horarios disponibles y el procedimiento para agendar.
        </p>
        <p>
          También puedes llamar al mismo número o escribir a <a href={LINKS.email}>{SITE.email}</a>.
        </p>
      </>
    ),
  },
  {
    q: '¿Dónde se encuentra el consultorio?',
    a: (
      <p>
        El consultorio se encuentra en el {SITE.location.place}, en {SITE.location.city}, {SITE.location.country}. Para
        recibir indicaciones precisas sobre cómo llegar, comunícate por WhatsApp o por teléfono.
      </p>
    ),
  },
  {
    q: '¿Cómo puedo comunicarme con el centro?',
    a: (
      <ul>
        <li>
          WhatsApp y teléfono: <a href={LINKS.phone}>{SITE.phoneDisplay}</a>
        </li>
        <li>
          Correo electrónico: <a href={LINKS.email}>{SITE.email}</a>
        </li>
        <li>
          Facebook:{' '}
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
            {SITE.brand}
          </a>
        </li>
      </ul>
    ),
  },
  {
    q: '¿Qué debo hacer para consultar los horarios de atención?',
    a: (
      <p>
        Los horarios de atención pueden consultarse directamente por{' '}
        <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{' '}
        o llamando al {SITE.phoneDisplay}. El consultorio te confirmará la disponibilidad vigente.
      </p>
    ),
  },
  {
    q: '¿Qué especialidades se atienden en el centro?',
    a: (
      <p>
        El {SITE.tradeName} reúne las especialidades de endocrinología y ginecología. Si no sabes cuál corresponde a tu
        consulta, escríbenos y te orientaremos.
      </p>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="preguntas" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__aside">
          <div className="section-head">
            <p className="eyebrow reveal">Preguntas frecuentes</p>
            <h2 id="faq-title" className="h2 reveal">
              Resolvemos tus <em>dudas.</em>
            </h2>
          </div>
          <div className="faq__help reveal">
            <p>¿No encuentras lo que buscas?</p>
            <a className="btn btn--sm" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsApp /> Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        <div className="faq__list reveal">
          {QUESTIONS.map((item, i) => {
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
      </div>
    </section>
  );
}
