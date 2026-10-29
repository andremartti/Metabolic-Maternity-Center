import type { CSSProperties, ReactNode } from 'react';
import { SITE } from '../content/site';
import { Chat, Compass, Info, MapPin } from './Icons';
import './Trust.css';

const ITEMS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Info />,
    title: 'Información clara para el paciente',
    text: 'Contenido sencillo sobre nuestras especialidades para que sepas qué esperar antes de comunicarte.',
  },
  {
    icon: <Chat />,
    title: 'Comunicación directa con el consultorio',
    text: `WhatsApp, teléfono y correo atendidos por el propio consultorio en el ${SITE.phoneDisplay}.`,
  },
  {
    icon: <Compass />,
    title: 'Orientación sobre las especialidades',
    text: 'Te ayudamos a identificar el área de atención adecuada: endocrinología o ginecología.',
  },
  {
    icon: <MapPin />,
    title: `Ubicación en el ${SITE.location.place}`,
    text: `Consultorio ubicado en el ${SITE.location.place}, ${SITE.location.city}, ${SITE.location.country}.`,
  },
];

export function Trust() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="container">
        <div className="trust__panel">
          <div className="trust__head reveal">
            <p className="trust__eyebrow">Para tu tranquilidad</p>
            <h2 id="trust-title" className="trust__title">
              Lo esencial, <em>a tu alcance.</em>
            </h2>
          </div>
          <ul className="trust__list">
            {ITEMS.map((item, i) => (
              <li key={item.title} className="reveal" style={{ '--delay': `${i * 80}ms` } as CSSProperties}>
                <span className="trust__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
